export type Entitlements = {
    products: {
        managedDb?: boolean;
        managedVps?: boolean;
    };
    features: Record<string, boolean>;
};

export const DEMO_ENTITLEMENTS: Entitlements = {
    products: { managedDb: true, managedVps: false },
    features: {
        "billing.view": true,
        "support.tickets": true,
        "monitor.basic": true,
        "monitor.alerts": false,     // khóa để demo
        "monitor.history_7d": false, // khóa để demo
        "monitor.db": true,          // chỉ hiện DB monitoring nếu managedDb
        "monitor.infra": false,      // chỉ hiện infra nếu managedVps
    },
};

export function hasFeature(ent: Entitlements, key: string) {
    return Boolean(ent.features[key]);
}
