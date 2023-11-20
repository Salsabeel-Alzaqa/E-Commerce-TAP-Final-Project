import React from 'react'
import { TabPanel } from '../../components/TabPanel/TabPanel';
import { ItemsOrdered } from './partials/ItemsOrdered';
const TabsItems = [
      {
        'label': 'Items Ordered',
        'content': <ItemsOrdered />
      },
      {
        'label': 'Invoices',
        'content': <>nothing to show </>
      },
      {
        'label': 'Order Shipment',
        'content': <>nothing to show</>
      }
    ];
export const OrderDetailsPage = () => {  
  return (
      <>
      <TabPanel TabsItems={TabsItems} />
    </>
  )
}