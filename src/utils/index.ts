import image from '../assets/Ellipse.png';

export const loginValidate = (values: any) => {
    const errors:any = {};
    for (const field in values) {
        errors[field] = '';
    }

    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
      if (field in values && !values[field]) {
        errors[field] = 'Обязательное поле!';
      }
    });

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный адрес электронной почты!';
    }

    return errors;
}

export const fakeFetch = (ms: number) => {
    const results = new Array(10).fill({
        productPreview: image,
        productName: 'SHINGLAS многослойная черепица, Ранчо, Коричневый, 2 м2',
        productQuantity: 78,
        productQuantityType: 'уп',
        priceForOne: 589,
    });
    
    return new Promise(res => setTimeout(() => res(results), ms));
}