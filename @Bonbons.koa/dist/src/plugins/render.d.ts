export interface ViewTplRender {
    (tpl: string, data?: any): string;
}
export declare const TPL_RENDER: import("../metadata/di").BonbonsToken<ViewTplRender>;
export declare function defaultViewTplRender(tpl: string, data?: any): string;
