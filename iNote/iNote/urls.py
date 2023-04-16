from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    # API Token URLs
    path("api/", include("api.urls")),
    # Documantation For Blog (coreapi)
    path("docs/", include_docs_urls(title="iNote")),
    path("schema/", get_schema_view(
        title="iNote",
        description="API For All Of Your Needs",
        version="1.0.0",
    ),
         name="openAPI-Schemas"),
    # Main Intergrated URL
    path("", TemplateView.as_view(template_name="index.html"))
]
