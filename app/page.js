const data = await res.json();
setLoading(false)
if(data.status === 'success'){
  alert('Tafadhali angalia simu yako kuingiza PIN')
} else {
  alert('Kuna shida: ' + data.message) // Hii itatuonyesha error halisi
}
