function autocomplete(address, lat, lng) {
  if (!address) return;

  const dropdown = new google.maps.places.Autocomplete(address);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    lat.value = place.geometry.location.lat();
    lng.value = place.geometry.location.lng();
  });

  address.on('keydown', e => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

export default autocomplete;
