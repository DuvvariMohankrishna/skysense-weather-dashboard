
from django.shortcuts import render


def dashboard(request):
    """
    Render the SkySense weather dashboard.
    """

    return render(
        request,
        'weather/dashboard.html'
    )
