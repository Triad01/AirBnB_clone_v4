
$(document).ready(function () {

  // task 2: Handle amenities checkboxes
  const selectedAmenityIds = {};

  $('input[type=checkbox]').change(function () {
    const amenityId = $(this).data("id");
    const amenityName = $(this).data("name");

    if (this.checked) {
      selectedAmenityIds[amenityId] = amenityName;
    } else {
      delete selectedAmenityIds[amenityId];
    }

    const amenitiesList = Object.values(selectedAmenityIds).join(', ');
    $('.filters h4').text(`Amenities: ${amenitiesList}`);
  });

  // task 3: Check API status
  $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
    if (data.status === 'OK') {
      $(".test").css("color", "blue")
      $('#api_status').addClass('available');
      console.log("okay")
    } else {
      $(".test").css("color", "red")
      $('#api_status').removeClass('available');
    }
  });

  // task 4: Load places
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done(function (data) {
    for (const place of data) {
      const template = `<article>
        <div class="title">
          <h2>${place.name}</h2>
          <div class="price_by_night">
            $${place.price_by_night}
          </div>
        </div>
        <div class="information">
          <div class="max_guest">
            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            <br />
            ${place.max_guest} Guests
          </div>
          <div class="number_rooms">
            <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
            <br />
            ${place.number_rooms} Bedrooms
          </div>
          <div class="number_bathrooms">
            <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
            <br />
            ${place.number_bathrooms} Bathroom
          </div>
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>`;
      $('section.places').append(template);
    }
  });
});
