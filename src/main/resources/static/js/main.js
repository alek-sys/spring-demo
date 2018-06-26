fetch("/api/visits")
  .then(response => response.json())
  .then(visits => {
    visits.forEach(visit => {
      const el = document.createElement('li');
      el.innerText = visit.description;

      document.querySelector('#visits').append(el);
    });
  });