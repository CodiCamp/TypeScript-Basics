// Specialt types
// 1. ANY - avoid by any means

// let anyVar: any;

// 2 Void
// let config = { path: './dist' };

// function modifyConfig(): void {
//   config.path = './build';
// }

// 3 Null

// let a: string | null | boolean = '';
// a = null;
// a = true;
// a = 10;

// Literal types
function literalTypes(size: 'small' | 'medium' | 'large') {}
// Union types
function unionTypes(size: 4 | 3 | 2) {}
