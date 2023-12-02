import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getSettings, updateSettings } from "../../services/apiSettings";
import { Form } from "./StyledSettings";
import { toast } from "react-hot-toast";

function SettingsForm() {
  // get settings data to display
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  const { minBooking, maxBooking, maxGuest, breakfastPrice } = settings ?? {};

  // updating settings
  const queryClient = useQueryClient();
  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success("Cabin updated"),
        queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => toast.error("You messed up something"),
  });

  // function to handle update on individual field change
  const handleUpdataOnBlur = (e) => {
    const { name, value } = e.target;
    mutate({ [name]: value });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Form>
      <div>
        <label htmlFor="minBooking">Minimal nights per booking</label>
        <input
          type="number"
          id="minBooking"
          name="minBooking"
          defaultValue={minBooking}
          onBlur={handleUpdataOnBlur}
        />
      </div>
      <div>
        <label htmlFor="maxBooking">Maximal nights per booking</label>
        <input
          type="number"
          id="maxBooking"
          name="maxBooking"
          onBlur={handleUpdataOnBlur}
          defaultValue={maxBooking}
        />
      </div>
      <div>
        <label htmlFor="maxGuest">Max guest number</label>
        <input
          type="number"
          id="maxGuest"
          name="maxGuest"
          onBlur={handleUpdataOnBlur}
          defaultValue={maxGuest}
        />
      </div>
      <div>
        <label htmlFor="breakfastPrice">Price of breakfast</label>
        <input
          type="number"
          id="breakfastPrice"
          name="breakfastPrice"
          onBlur={handleUpdataOnBlur}
          defaultValue={breakfastPrice}
        />
      </div>
      <button type="submit">Update</button>
    </Form>
  );
}

export { SettingsForm };
