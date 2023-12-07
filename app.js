const selectCourse = document.getElementById('selectCourse');
selectCourse.onchange = (event) => {
    window.open(location.origin + selectCourse.value, '_self')
}

