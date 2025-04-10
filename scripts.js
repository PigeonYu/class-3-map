document.querySelectorAll('.store-btn').forEach(button => {
    button.addEventListener('click', function () {
        const storeName = this.textContent;
        let imageUrl = '';
        let description = '';

        switch (storeName) {
            case 'McNally Jackson':
                imageUrl = 'https://www.jenscribblesny.com/cdn/shop/products/mcnally-jackson-williamsburg-822758_grande.jpg?v=1684715517';
                description = 'Located in SoHo, it\'s a great place for discovering unique books and author events.';
                break;
            case 'Strand Bookstore':
                imageUrl = 'https://i.etsystatic.com/9668448/r/il/b5201f/6006316416/il_fullxfull.6006316416_5ldp.jpg';
                description = 'Known for its "18 Miles of Books," it offers an immense collection from mainstream and independent genres.';
                break;
            case 'Rizzoli Bookstore':
                imageUrl = 'https://image.isu.pub/201001144947-c43614cb3fccebd1d50b445d8c80e36f/jpg/page_1_thumb_large.jpg';
                description = 'Specializes in illustrated books and foreign literature. It\'s a cultural landmark.';
                break;
        }

        const infoDiv = document.getElementById('store-info');
        infoDiv.innerHTML = `<h2>${storeName}</h2><p>${description}</p><img src="${imageUrl}" alt="${storeName}" style="width:100%; max-width: 300px;">`;
        infoDiv.style.display = 'block';
    });
});