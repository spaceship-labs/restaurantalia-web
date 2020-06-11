<div class="dish">
  <h4>Sample dish number one</h4>
  <div class="details">
    <div class="description">
      <p>Description of the dish</p>
    </div>
    <div class="fill"></div>
    <div class="price">
      <p>$17.50</p>
    </div>
  </div>
</div><!-- dish end -->

<style>
  .dish {
    padding: 5px 20px;
  }

  .dish h4 {
    font-size: 1em;
    margin: 0;
  }

  .dish p {
    margin: 0;
  }

  .dish .details {
    display: flex;
    align-items: flex-end;
  }

  .dish .details .description {
    font-size: 1em;
  }

  .dish .details .price p {
    font-size: 1em;
    font-weight: bold;
  }

  .dish .details .fill {
    border-bottom: 1px dotted;
    flex: 1;
    min-width: 20px;
  }
</style>