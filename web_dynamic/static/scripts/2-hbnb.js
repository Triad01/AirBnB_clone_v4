$(document).ready(function(){
    // task 2
    selectedAmenityIds = {}
    
    $('input[type=checkbox]').change(function(){
        const amenityId = $(this).data("id")
        const amenityName = $(this).data("name")

        if (this.checked){
            selectedAmenityIds[amenityId] = amenityName
        }
        else{
            delete selectedAmenityIds[amenityId]
        }

        const amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.filters h4').text(`Amenities: ${amenitiesList}`);
    })

    // task 3
    $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });

  
})
