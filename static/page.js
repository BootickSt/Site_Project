function adjustLayout() {
    const textBlock = document.querySelector('.text');
    const innerBlock = document.querySelector('.inner-block');
    const rectangle = document.querySelector('.rectangle');

    // Получаем ширину контейнера
    const containerWidth = rectangle.getBoundingClientRect().width;

    // Устанавливаем максимальную ширину для inner-block
    innerBlock.style.maxWidth = `${containerWidth}px`;

    // Получаем масштаб страницы
    const scale = window.devicePixelRatio;

    // Получаем видимую ширину экрана с учетом масштабирования
    const viewportWidth = window.innerWidth / scale;

    // Получаем ширину текстового блока с учетом масштабирования
    const textWidth = textBlock.getBoundingClientRect().width / scale;

    // Получаем ширину блока inner-block с учетом масштабирования
    const innerBlockWidth = innerBlock.getBoundingClientRect().width / scale;

    // Если суммарная ширина текстового блока и блока inner-block превышает видимую ширину экрана,
    // перемещаем блок inner-block вниз
    if (textWidth + innerBlockWidth  > viewportWidth) {
        innerBlock.style.marginTop = '40px'; // Перемещаем блок вниз
    } else {
        innerBlock.style.marginTop = '0'; // Возвращаем блок на исходную позицию
    }
}

// Вызываем adjustLayout при загрузке страницы и изменении размера окна
window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
