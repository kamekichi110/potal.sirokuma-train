let image = new Image();
 
 $(() => {
   let canvas = $('#canvas')[0];
     let context = canvas.getContext('2d');
      
        $('#file_choice').on('change', (e) => {
            let file = e.target.files[0];
                let reader = new FileReader();
                    reader.readAsDataURL(file);
                     
                         reader.onload = () => {
                               image.src = reader.result;
                                   }
                                     });
                                      
                                        $(image).load(() => {
                                            context.drawImage(image, 0, 0, canvas.width, canvas.height);
                                              });
                                               
                                               });