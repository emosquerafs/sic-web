import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../utils/services/language.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  model: MenuItem[] = [];

  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.translateService
        .get([
          'menu.staticData.title',
          'menu.staticData.locations.title',
          'menu.staticData.locations.country',
          'menu.staticData.locations.states',
          'menu.staticData.locations.city',
          'menu.staticData.commonData.title',
          'menu.staticData.commonData.level',
          'menu.staticData.commonData.documentType',
          'menu.staticData.commonData.regiemnt',
          'menu.staticData.commonData.productGroup',
          'menu.staticData.commonData.productSubgroup',
          'menu.staticData.commonData.productType',
          'menu.staticData.commonData.measure',
          'menu.staticData.commonData.unitMeasurement',
          'menu.businessOrganization.title',
          'menu.businessOrganization.billingSubmission.title',
          'menu.businessOrganization.billingSubmission.billingSubmission',
          'menu.businessOrganization.healthcareProviders.title',
          'menu.businessOrganization.healthcareProviders.epsRegistration',
          'menu.businessOrganization.healthcareProviders.patient',
          'menu.businessOrganization.product.title',
          'menu.businessOrganization.product.inventory',
          'menu.businessOrganization.product.newProducts',
          'menu.businessOrganization.purchases.title',
          'menu.businessOrganization.purchases.purchaseRequests',
          'menu.businessOrganization.purchases.purchaseOrders',
          'menu.businessOrganization.purchases.purchaseHistory',
          'menu.businessOrganization.deliveryAndMedicationTracking.title',
          'menu.businessOrganization.deliveryAndMedicationTracking.medicationDeliveryRequests',
          'menu.businessOrganization.deliveryAndMedicationTracking.deliveryStatus',
          'menu.businessOrganization.deliveryAndMedicationTracking.deliveryHistory',
          'menu.businessOrganization.deliveryAndMedicationTracking.partialPrescriptionTracking',
          'menu.businessOrganization.deliveryAndMedicationTracking.deliveryPersonnelManagement',
          'menu.businessOrganization.suppliers.title',
          'menu.businessOrganization.suppliers.supplierRegistration'
        ])
        .subscribe(translations => {
          this.model = [
            {
              label: translations['menu.staticData.title'],
              icon: 'pi pi-th-large',
              items: [
                {
                  label: translations['menu.staticData.locations.title'],
                  icon: 'fa-solid fa-map-location-dot',
                  items: [
                    {
                      label: translations['menu.staticData.locations.country'],
                      icon: 'fa-solid fa-earth-americas',
                      routerLink: ['/static-data/country']
                    },
                    {
                      label: translations['menu.staticData.locations.states'],
                      icon: 'fa-brands fa-usps',
                      routerLink: ['/static-data/state']
                    },
                    {
                      label: translations['menu.staticData.locations.city'],
                      icon: 'fa-solid fa-city',
                      routerLink: ['/static-data/city']
                    }
                  ]
                },
                {
                  label: translations['menu.staticData.commonData.title'],
                  icon: 'fa-solid fa-group-arrows-rotate',
                  items: [
                    {
                      label: translations['menu.staticData.commonData.level'],
                      icon: 'fa-solid fa-people-arrows',
                      routerLink: ['/static-data/level']
                    },
                    {
                      label: translations['menu.staticData.commonData.documentType'],
                      icon: 'fa-solid fa-id-card',
                      routerLink: ['/static-data/document-type']
                    },
                    {
                      label: translations['menu.staticData.commonData.productGroup'],
                      icon: 'fa-solid fa-object-group',
                      routerLink: ['/static-data/product/group']
                    },
                    {
                      label: translations['menu.staticData.commonData.productSubgroup'],
                      icon: 'fa-solid fa-object-ungroup',
                      routerLink: ['/static-data/product/subgroup']
                    },
                    {
                      label: translations['menu.staticData.commonData.productType'],
                      icon: 'fa-solid fa-layer-group',
                      routerLink: ['/static-data/dproduct/type']
                    },
                    {
                      label: translations['menu.staticData.commonData.measure'],
                      icon: 'fa-brands fa-unity',
                      routerLink: ['/static-data/product/measure']
                    },
                    {
                      label: translations['menu.staticData.commonData.unitMeasurement'],
                      icon: 'fa-solid fa-ruler',
                      routerLink: ['/static-data/product/unit-measurement']
                    }
                  ]
                }
              ]
            },
            {
              label: translations['menu.businessOrganization.title'],
              icon: 'fa-solid fa-sitemap',
              items: [
                {
                  label: translations['menu.businessOrganization.billingSubmission.title'],
                  icon: 'fa-solid fa-map-location-dot',
                  items: [
                    {
                      label: translations['menu.businessOrganization.billingSubmission.billingSubmission'],
                      icon: 'fa-solid fa-landmark',
                      routerLink: ['/organization/billing/submission']
                    }
                  ]
                },
                {
                  label: translations['menu.businessOrganization.healthcareProviders.title'],
                  icon: 'fa-solid fa-map-location-dot',
                  items: [
                    {
                      label: translations['menu.businessOrganization.healthcareProviders.epsRegistration'],
                      icon: 'fa-solid fa-landmark',
                      routerLink: ['/organization/eps/eps']
                    },
                    {
                      label: translations['menu.businessOrganization.healthcareProviders.patient'],
                      icon: 'fa-solid fa-hospital-user',
                      routerLink: ['/organization/patient/patient']
                    }
                  ]
                },
                {
                  label: translations['menu.businessOrganization.product.title'],
                  icon: 'fa-brands fa-product-hunt',
                  items: [
                    {
                      label: translations['menu.businessOrganization.product.inventory'],
                      icon: 'fa-solid fa-boxes-stacked',
                      routerLink: ['/organization/product/inventory']
                    },
                    {
                      label: translations['menu.businessOrganization.product.newProducts'],
                      icon: 'fa-solid fa-plus-square',
                      routerLink: ['/organization/product/addproduct']
                    }
                  ]
                },
                {
                  label: translations['menu.businessOrganization.suppliers.title'],
                  icon: 'fa-solid fa-money-check-dollar',
                  items: [
                    {
                      label: translations['menu.businessOrganization.suppliers.supplierRegistration'],
                      icon: 'fa-solid fa-cash-register',
                      routerLink: ['/organization/supplier/supplier']
                    }
                  ]
                },
                {
                  label: translations['menu.businessOrganization.purchases.title'],
                  icon: 'fa-solid fa-money-check-dollar',
                  items: [
                    {
                      label: translations['menu.businessOrganization.purchases.purchaseHistory'],
                      icon: 'fa-solid fa-timeline',
                      routerLink: ['/organization/purchase/purchase-list']
                    },
                    {
                      label: translations['menu.businessOrganization.purchases.purchaseRequests'],
                      icon: 'fa-solid fa-cash-register',
                      routerLink: ['/organization/purchase/add-edit-purchase']
                    },
                    {
                      label: translations['menu.businessOrganization.purchases.purchaseOrders'],
                      icon: 'fa-solid fa-shop',
                      routerLink: ['/organization/purchase/purchase-order']
                    }
                  ]
                },
                {
                  label: translations['menu.businessOrganization.deliveryAndMedicationTracking.title'],
                  icon: 'fa-solid fa-truck-medical',
                  items: [
                    {
                      label: translations['menu.businessOrganization.deliveryAndMedicationTracking.medicationDeliveryRequests'],
                      icon: 'fa-solid fa-prescription-bottle-alt',
                      routerLink: ['/delivery/medication-delivery-requests']
                    },
                    {
                      label: translations['menu.businessOrganization.deliveryAndMedicationTracking.deliveryStatus'],
                      icon: 'fa-solid fa-shipping-fast',
                      routerLink: ['/delivery/delivery-status']
                    },
                    {
                      label: translations['menu.businessOrganization.deliveryAndMedicationTracking.deliveryHistory'],
                      icon: 'fa-solid fa-history',
                      routerLink: ['/delivery/delivery-history']
                    },
                    {
                      label: translations['menu.businessOrganization.deliveryAndMedicationTracking.partialPrescriptionTracking'],
                      icon: 'fa-solid fa-pills',
                      routerLink: ['/delivery/partial-prescription-tracking']
                    },
                    {
                      label: translations['menu.businessOrganization.deliveryAndMedicationTracking.deliveryPersonnelManagement'],
                      icon: 'fa-solid fa-user-md',
                      routerLink: ['/delivery/delivery-personnel-management']
                    }
                  ]
                }
              ]
            }
          ];
        });
    });
  }
}
