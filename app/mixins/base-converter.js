import Mixin from '@ember/object/mixin';

export default Mixin.create({

  //Convert file into base64 encode format
  getBase64(file){
    return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  },
});
