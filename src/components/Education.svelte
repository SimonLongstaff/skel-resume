<div class="flex education-container">
    <div class="card variant-glass-secondary">
        <div class="card-header flex justify-between">
            <h1>MSc Computer Science</h1>
            <span>University of Birmingham</span>
        </div>
        <div class="card-body">
            <p>Graduated in 2020</p>
        </div>
    </div>
    <div class="card variant-glass-secondary">
        <div class="card-header flex justify-between">
            <h1>BSc Neuroscience</h1>
            <span>University of Bristol</span>
        </div>
        <div class="card-body">
            <p>Graduated in 2019</p>
        </div>
    </div>
</div>

<style>

    span {
        text-align: right;
    }

    .education-container {
        width: 100%;
        gap: 20px;
        padding-top: 20px;
        flex-wrap: wrap;
    }

    .card {
        flex: 1
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .card-body {
        padding: 20px;
    }

    @media (max-width: 768px) {
        .education-container {
            padding-top: 20px;
            width: 95vw;
        }
    }

</style>