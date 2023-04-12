import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
    email: yup.string().email('Lütfen doğru bir Email giriniz.').required('Email alanını boş geçmeyiniz.'),
    age: yup.number().positive('Lütfen pozitif bir tam sayı giriniz.').integer('Lütfen tam sayı giriniz').required('Yaş alanını boş geçmeyiniz.'),
    password: yup.string().min(5,'Lütfen minimum beş karakter giriniz.').matches(passwordRules,{message:"Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz."}).required('Şifre alanını boş geçmeyiniz.'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor').required('Lütfen şifre tekrarını giriniz.'),
});
export const advancedSchema = yup.object().shape({
    username: yup.string().min(3,'Minimum 3 karakter olmalıdır.').required('Kullanıcı adı alanını boş geçmeyiniz.'),
    university: yup.string().oneOf(['bogazici','gsu','odtu','itu'],'Lütfen üniversitenizi seçiniz.').required('Lütfen üniversitenizi seçiniz.'),
    isAccepted: yup.boolean().oneOf([true],'Lütfen sözleşmeyi kabul ediniz.').required('Lütfen sözleşmeyi kabul ediniz.'),
});