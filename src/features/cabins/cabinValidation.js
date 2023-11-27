export const validateInputs = (inputName, validateValue = false) => {
    switch (inputName) {
        case 'name':
            return {
                required: 'Name is required',
                minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters'
                },
                maxLength: {
                    value: 20,
                    message: 'Name must be at most 20 characters'
                }
            };
        case 'capacity':
            return {
                required: 'Capacity is required',
                min: {
                    value: 1,
                    message: "Capacity must be at least 1"
                },
                max: {
                    value: 10,
                    message: "Capacity must be at most 10"
                }
            };
        case 'price':
            return {
                required: 'Price is required',
                min: {
                    value: 50,
                    message: "Price must be at least 50$"
                }
            };
        case 'discount':
            return {
                required: 'Discount is required, put 0 for no discount',
                min: {
                    value: 0,
                    message: "Discount must be at least 0"
                },
                // validate: {
                //     lessThanPrice: (value) => validateValue === false ? "Discount should be less than price" : null
                // }
            };

        case 'description':
            return {
                required: 'Description is required',
                minLength: {
                    value: 10,
                    message: 'Description must be at least 10 characters'
                }
            };
        case 'imgUrl':
            return {
                required: 'Image is required',
            };
        default:
            return {};

    }
};