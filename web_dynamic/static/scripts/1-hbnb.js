$(document).ready(function(){
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
})
