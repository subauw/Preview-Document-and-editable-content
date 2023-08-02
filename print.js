// Menginisialisasi editor
ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        // Ketika editor siap, ambil konten dari div documentPreview
        const documentPreview = document.querySelector('#documentPreview');
        editor.setData(documentPreview.innerHTML);

        // Saat konten berubah, perbarui preview
        editor.model.document.on('change:data', () => {
            const updatedContent = editor.getData();
            documentPreview.innerHTML = updatedContent;
        });

        // Fungsi untuk mencetak dokumen
        document.addEventListener('keydown', event => {
            if (event.ctrlKey && event.key === 'p') {
                event.preventDefault();
                window.print();
            }
        });
    })
    .catch(error => {
        console.error(error);
    });