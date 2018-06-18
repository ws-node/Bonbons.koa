import { BonbonsDeptNode } from "../metadata/di";
export declare class DependencyQueue {
    private queue;
    private sections;
    addNode({ el, realel, scope, deps }: BonbonsDeptNode): void;
    sort(): BonbonsDeptNode[];
    private decideSection;
}
