function GetCurrentDateHelper() {
  const registrationTimestamp = Date.now();
  const registrationDate = new Date(registrationTimestamp);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Sao_Paulo',
    timeZoneName: 'short',
  };

  const formattedDate = registrationDate.toLocaleString('pt-BR', options);

  return formattedDate;
}

module.exports = GetCurrentDateHelper;

