import { useForm, FormProvider } from 'react-hook-form';
import { addCabin, editCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Form, Input } from "./StyledFormComponents";

function AddCabin({ cabinToEdit = false }) {
    const { id: cabinId, ...editData } = cabinToEdit;
    const isEditActive = Boolean(cabinId);
    const methods = useForm({
        defaultValues: isEditActive ? editData : {},
    });

    const queryClient = useQueryClient();
    // react query handling mutations
    const { mutate, isLoading: isCreating } = useMutation({
        mutationFn: isEditActive ? editCabin : addCabin,
        onSuccess: (updatedCabin) => {
            toast.success(`${isEditActive ? "Cabin edited" : "Cabin added"}`);
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            });

            // Reset the form with the updated data, if it's an object
            methods.reset(updatedCabin && typeof updatedCabin === 'object' ? updatedCabin : {});
        },
        onError: (error) => toast.error(error.message)
    });

    async function onSubmit(data) {
        await mutate({ ...data, imgUrl: data.imgUrl[0] });
        methods.reset(); // Reset the form after mutation is complete
    }


    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input title="Cabin Name" name="name" type="text" disabled={isCreating} id="name" />

                <Input title="Capacity" name="maxCap" type="number" disabled={isCreating} id="maxCap" />

                <Input title="Price" name="price" type="number" disabled={isCreating} id="price" />

                <Input title="Discount" name="discount" type="number" validateValue={methods.getValues().price}  disabled={isCreating} id="discount" />

                <Input title="Description" name="description" type="text" disabled={isCreating} id="description" />

                <Input title="Image" name="imgUrl" type="file" accept="image/*" disabled={isCreating} id="imgUrl" isEditActive={isEditActive} />

                <button type="submit">{isEditActive ? "Edit" : "Add"}</button>
            </Form>
        </FormProvider>
    );
}

export { AddCabin };
