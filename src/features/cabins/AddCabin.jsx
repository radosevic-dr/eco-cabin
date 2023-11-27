import { useForm, FormProvider } from 'react-hook-form';
import { addCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Form from "./Form";
import Input from "./Input";

function AddCabin() {
    const methods = useForm();

    const queryClient = useQueryClient();
    // react query handling mutations
    const { mutate, isLoading: isCreating } = useMutation({
        mutationFn: addCabin,
        onSuccess: () => {
            toast.success("Cabin added");
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            });
            methods.reset();
        },
        onError: (error) => toast.error(error.message)
    });
    // handleing form
    function onSubmit(data) {

        mutate({ ...data, imgUrl: data.imgUrl[0] });
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input title="Cabin Name" name="name" type="text" disabled={isCreating} id="name" />

                <Input title="Capacity" name="maxCap" type="number" disabled={isCreating} id="maxCap" />

                <Input title="Price" name="price" type="number" disabled={isCreating} id="price" />

                <Input title="Discount" name="discount" type="number" validateValue={methods.getValues().price < methods.getValues().discount} disabled={isCreating} id="discount" />

                <Input title="Description" name="description" type="text" disabled={isCreating} id="description" />

                <Input title="Image" name="imgUrl" type="file" accept="image/*" disabled={isCreating} id="imgUrl" />

                <button type="submit">Add</button>
            </Form>
        </FormProvider>
    );
}

export { AddCabin };
