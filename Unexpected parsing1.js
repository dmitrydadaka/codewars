
function getStatus(isBusy) {
    return { status: { true : 'busy', false: 'available' }[isBusy] };
  }