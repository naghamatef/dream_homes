//confirm-alert
$(document).on('click', '.confirm-alert', function (e) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  })

  swalWithBootstrapButtons.fire({
    title: 'هل أنت متأكد؟',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
  }).then((result) => {
    if (result.value) {
      swalWithBootstrapButtons.fire({
        title: 'تم إضافته للمفضلة بنجاح',
        showConfirmButton: false,
        timer: 1000
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: 'تم إلإلغاء',
        showConfirmButton: false,
        timer: 1000
      });

    }
  })

});


//sucess-alert

$(document).on('click', '.success-alert', function (e) {
  Swal.fire({
    type: 'success',
    title: 'تم إضافته للسلة بنجاح',
    showConfirmButton: false,
    timer: 1500
  });



  
});