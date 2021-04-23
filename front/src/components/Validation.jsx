function nameValidation(val) {
  if (!val){
    return '商品名を入力してください';
  } else if (val.length > 10){
    return '商品名は10文字以内で設定してください';
  } else {
    return 'ok';
  }
}

function priceValidation(val) {
  const regex = /[^0-9]+/;
  if (!val){
    return '金額を入力してください'
  } else if (val > 10000){
    return '10000以下で設定してください';
  } else if (regex.test(val)){
    return '金額は半角数字で指定してください';
  } else {
    return 'ok';
  }
}

function vendorValidation(val) {
  if (!val){
    return 'ベンダを入力してください';
  } else if (val.length > 10){
    return 'ベンダは10文字以内で設定してください';
  } else {
    return 'ok';
  }
}

function Validation(type, val) {
  switch (type) {
    case 'name':
      return nameValidation(val);
    case 'price':
      return priceValidation(val);
    case 'vendor':
      return vendorValidation(val);
    default:
  }
};
  
export default Validation;