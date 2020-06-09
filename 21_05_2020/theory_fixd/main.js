function openMenuMobile(isOpen) {
    const menu =window.document.getElementById('menu-mobile')
    if (isOpen) {
        menu.style.right = '0px'
    } else {
        menu.style.right='-320px'
    }
}