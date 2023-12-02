export const validateInputs = (...props) => {
    const { inputName, validateValue = false, isEditActive = false } = props;
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
                required: false,
                validate: {
                    lessThanPrice: (value) => validateValue < value ? "Discount should be less than price" : null
                }
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
                required: isEditActive ? false : 'Image is required',
            };
        default:
            return {};

    }
};