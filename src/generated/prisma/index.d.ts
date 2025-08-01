
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Persona
 * 
 */
export type Persona = $Result.DefaultSelection<Prisma.$PersonaPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Proveedor
 * 
 */
export type Proveedor = $Result.DefaultSelection<Prisma.$ProveedorPayload>
/**
 * Model Entidad
 * 
 */
export type Entidad = $Result.DefaultSelection<Prisma.$EntidadPayload>
/**
 * Model Egreso
 * 
 */
export type Egreso = $Result.DefaultSelection<Prisma.$EgresoPayload>
/**
 * Model Lanzamiento
 * 
 */
export type Lanzamiento = $Result.DefaultSelection<Prisma.$LanzamientoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personas
 * const personas = await prisma.persona.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personas
   * const personas = await prisma.persona.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.PersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.ProveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entidad`: Exposes CRUD operations for the **Entidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entidads
    * const entidads = await prisma.entidad.findMany()
    * ```
    */
  get entidad(): Prisma.EntidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.egreso`: Exposes CRUD operations for the **Egreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Egresos
    * const egresos = await prisma.egreso.findMany()
    * ```
    */
  get egreso(): Prisma.EgresoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lanzamiento`: Exposes CRUD operations for the **Lanzamiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lanzamientos
    * const lanzamientos = await prisma.lanzamiento.findMany()
    * ```
    */
  get lanzamiento(): Prisma.LanzamientoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Persona: 'Persona',
    Funcionario: 'Funcionario',
    Proveedor: 'Proveedor',
    Entidad: 'Entidad',
    Egreso: 'Egreso',
    Lanzamiento: 'Lanzamiento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "persona" | "funcionario" | "proveedor" | "entidad" | "egreso" | "lanzamiento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Persona: {
        payload: Prisma.$PersonaPayload<ExtArgs>
        fields: Prisma.PersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findFirst: {
            args: Prisma.PersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findMany: {
            args: Prisma.PersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          create: {
            args: Prisma.PersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          createMany: {
            args: Prisma.PersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          delete: {
            args: Prisma.PersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          update: {
            args: Prisma.PersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          deleteMany: {
            args: Prisma.PersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          upsert: {
            args: Prisma.PersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.PersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Proveedor: {
        payload: Prisma.$ProveedorPayload<ExtArgs>
        fields: Prisma.ProveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findFirst: {
            args: Prisma.ProveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findMany: {
            args: Prisma.ProveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          create: {
            args: Prisma.ProveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          createMany: {
            args: Prisma.ProveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProveedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          delete: {
            args: Prisma.ProveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          update: {
            args: Prisma.ProveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          deleteMany: {
            args: Prisma.ProveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProveedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          upsert: {
            args: Prisma.ProveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.ProveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      Entidad: {
        payload: Prisma.$EntidadPayload<ExtArgs>
        fields: Prisma.EntidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          findFirst: {
            args: Prisma.EntidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          findMany: {
            args: Prisma.EntidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>[]
          }
          create: {
            args: Prisma.EntidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          createMany: {
            args: Prisma.EntidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>[]
          }
          delete: {
            args: Prisma.EntidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          update: {
            args: Prisma.EntidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          deleteMany: {
            args: Prisma.EntidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>[]
          }
          upsert: {
            args: Prisma.EntidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          aggregate: {
            args: Prisma.EntidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntidad>
          }
          groupBy: {
            args: Prisma.EntidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntidadCountArgs<ExtArgs>
            result: $Utils.Optional<EntidadCountAggregateOutputType> | number
          }
        }
      }
      Egreso: {
        payload: Prisma.$EgresoPayload<ExtArgs>
        fields: Prisma.EgresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EgresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EgresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>
          }
          findFirst: {
            args: Prisma.EgresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EgresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>
          }
          findMany: {
            args: Prisma.EgresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>[]
          }
          create: {
            args: Prisma.EgresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>
          }
          createMany: {
            args: Prisma.EgresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EgresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>[]
          }
          delete: {
            args: Prisma.EgresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>
          }
          update: {
            args: Prisma.EgresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>
          }
          deleteMany: {
            args: Prisma.EgresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EgresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EgresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>[]
          }
          upsert: {
            args: Prisma.EgresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgresoPayload>
          }
          aggregate: {
            args: Prisma.EgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEgreso>
          }
          groupBy: {
            args: Prisma.EgresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EgresoCountArgs<ExtArgs>
            result: $Utils.Optional<EgresoCountAggregateOutputType> | number
          }
        }
      }
      Lanzamiento: {
        payload: Prisma.$LanzamientoPayload<ExtArgs>
        fields: Prisma.LanzamientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanzamientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanzamientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>
          }
          findFirst: {
            args: Prisma.LanzamientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanzamientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>
          }
          findMany: {
            args: Prisma.LanzamientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>[]
          }
          create: {
            args: Prisma.LanzamientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>
          }
          createMany: {
            args: Prisma.LanzamientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanzamientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>[]
          }
          delete: {
            args: Prisma.LanzamientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>
          }
          update: {
            args: Prisma.LanzamientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>
          }
          deleteMany: {
            args: Prisma.LanzamientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanzamientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanzamientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>[]
          }
          upsert: {
            args: Prisma.LanzamientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanzamientoPayload>
          }
          aggregate: {
            args: Prisma.LanzamientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanzamiento>
          }
          groupBy: {
            args: Prisma.LanzamientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanzamientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanzamientoCountArgs<ExtArgs>
            result: $Utils.Optional<LanzamientoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    persona?: PersonaOmit
    funcionario?: FuncionarioOmit
    proveedor?: ProveedorOmit
    entidad?: EntidadOmit
    egreso?: EgresoOmit
    lanzamiento?: LanzamientoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    egresos: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egresos?: boolean | PersonaCountOutputTypeCountEgresosArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountEgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EgresoWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    egresos: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egresos?: boolean | FuncionarioCountOutputTypeCountEgresosArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountEgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EgresoWhereInput
  }


  /**
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    egresos: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egresos?: boolean | ProveedorCountOutputTypeCountEgresosArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountEgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EgresoWhereInput
  }


  /**
   * Count Type EntidadCountOutputType
   */

  export type EntidadCountOutputType = {
    egresos: number
    lanzamientos: number
  }

  export type EntidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egresos?: boolean | EntidadCountOutputTypeCountEgresosArgs
    lanzamientos?: boolean | EntidadCountOutputTypeCountLanzamientosArgs
  }

  // Custom InputTypes
  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadCountOutputType
     */
    select?: EntidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeCountEgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EgresoWhereInput
  }

  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeCountLanzamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanzamientoWhereInput
  }


  /**
   * Count Type EgresoCountOutputType
   */

  export type EgresoCountOutputType = {
    lanzamientos: number
  }

  export type EgresoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lanzamientos?: boolean | EgresoCountOutputTypeCountLanzamientosArgs
  }

  // Custom InputTypes
  /**
   * EgresoCountOutputType without action
   */
  export type EgresoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EgresoCountOutputType
     */
    select?: EgresoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EgresoCountOutputType without action
   */
  export type EgresoCountOutputTypeCountLanzamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanzamientoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonaSumAggregateOutputType = {
    id: number | null
  }

  export type PersonaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PersonaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    id?: true
  }

  export type PersonaSumAggregateInputType = {
    id?: true
  }

  export type PersonaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PersonaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PersonaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Persona to aggregate.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type PersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaWhereInput
    orderBy?: PersonaOrderByWithAggregationInput | PersonaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: PersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    id: number
    nombre: string
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends PersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type PersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    funcionario?: boolean | Persona$funcionarioArgs<ExtArgs>
    proveedor?: boolean | Persona$proveedorArgs<ExtArgs>
    egresos?: boolean | Persona$egresosArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["persona"]>
  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | Persona$funcionarioArgs<ExtArgs>
    proveedor?: boolean | Persona$proveedorArgs<ExtArgs>
    egresos?: boolean | Persona$egresosArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      funcionario: Prisma.$FuncionarioPayload<ExtArgs> | null
      proveedor: Prisma.$ProveedorPayload<ExtArgs> | null
      egresos: Prisma.$EgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type PersonaGetPayload<S extends boolean | null | undefined | PersonaDefaultArgs> = $Result.GetResult<Prisma.$PersonaPayload, S>

  type PersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface PersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Persona'], meta: { name: 'Persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {PersonaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaFindUniqueArgs>(args: SelectSubset<T, PersonaFindUniqueArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaFindFirstArgs>(args?: SelectSubset<T, PersonaFindFirstArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personaWithIdOnly = await prisma.persona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonaFindManyArgs>(args?: SelectSubset<T, PersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {PersonaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends PersonaCreateArgs>(args: SelectSubset<T, PersonaCreateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {PersonaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaCreateManyArgs>(args?: SelectSubset<T, PersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personas and returns the data saved in the database.
     * @param {PersonaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Persona.
     * @param {PersonaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends PersonaDeleteArgs>(args: SelectSubset<T, PersonaDeleteArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {PersonaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaUpdateArgs>(args: SelectSubset<T, PersonaUpdateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {PersonaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaDeleteManyArgs>(args?: SelectSubset<T, PersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaUpdateManyArgs>(args: SelectSubset<T, PersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas and returns the data updated in the database.
     * @param {PersonaUpdateManyAndReturnArgs} args - Arguments to update many Personas.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Persona.
     * @param {PersonaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends PersonaUpsertArgs>(args: SelectSubset<T, PersonaUpsertArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends PersonaCountArgs>(
      args?: Subset<T, PersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaGroupByArgs['orderBy'] }
        : { orderBy?: PersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Persona model
   */
  readonly fields: PersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends Persona$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Persona$funcionarioArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proveedor<T extends Persona$proveedorArgs<ExtArgs> = {}>(args?: Subset<T, Persona$proveedorArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    egresos<T extends Persona$egresosArgs<ExtArgs> = {}>(args?: Subset<T, Persona$egresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Persona model
   */
  interface PersonaFieldRefs {
    readonly id: FieldRef<"Persona", 'Int'>
    readonly nombre: FieldRef<"Persona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Persona findUnique
   */
  export type PersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findUniqueOrThrow
   */
  export type PersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findFirst
   */
  export type PersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findFirstOrThrow
   */
  export type PersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findMany
   */
  export type PersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Personas to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona create
   */
  export type PersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Persona.
     */
    data: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
  }

  /**
   * Persona createMany
   */
  export type PersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Persona createManyAndReturn
   */
  export type PersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Persona update
   */
  export type PersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Persona.
     */
    data: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
    /**
     * Choose, which Persona to update.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona updateMany
   */
  export type PersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona updateManyAndReturn
   */
  export type PersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona upsert
   */
  export type PersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Persona to update in case it exists.
     */
    where: PersonaWhereUniqueInput
    /**
     * In case the Persona found by the `where` argument doesn't exist, create a new Persona with this data.
     */
    create: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
    /**
     * In case the Persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
  }

  /**
   * Persona delete
   */
  export type PersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter which Persona to delete.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona deleteMany
   */
  export type PersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personas to delete
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to delete.
     */
    limit?: number
  }

  /**
   * Persona.funcionario
   */
  export type Persona$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
  }

  /**
   * Persona.proveedor
   */
  export type Persona$proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    where?: ProveedorWhereInput
  }

  /**
   * Persona.egresos
   */
  export type Persona$egresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    where?: EgresoWhereInput
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    cursor?: EgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Persona without action
   */
  export type PersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    egresos?: boolean | Funcionario$egresosArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    egresos?: boolean | Funcionario$egresosArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs>
      egresos: Prisma.$EgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    egresos<T extends Funcionario$egresosArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$egresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.egresos
   */
  export type Funcionario$egresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    where?: EgresoWhereInput
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    cursor?: EgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    id: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id: number | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id: number | null
  }

  export type ProveedorCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    id?: true
  }

  export type ProveedorSumAggregateInputType = {
    id?: true
  }

  export type ProveedorMinAggregateInputType = {
    id?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id?: true
  }

  export type ProveedorCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedor to aggregate.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type ProveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedorWhereInput
    orderBy?: ProveedorOrderByWithAggregationInput | ProveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: ProveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id: number
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type ProveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    egresos?: boolean | Proveedor$egresosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>

  export type ProveedorSelectScalar = {
    id?: boolean
  }

  export type ProveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["proveedor"]>
  export type ProveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    egresos?: boolean | Proveedor$egresosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProveedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }
  export type ProveedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }

  export type $ProveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedor"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs>
      egresos: Prisma.$EgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = $Result.GetResult<Prisma.$ProveedorPayload, S>

  type ProveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface ProveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'], meta: { name: 'Proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {ProveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedorFindUniqueArgs>(args: SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedorFindFirstArgs>(args?: SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProveedorFindManyArgs>(args?: SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {ProveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends ProveedorCreateArgs>(args: SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {ProveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedorCreateManyArgs>(args?: SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proveedors and returns the data saved in the database.
     * @param {ProveedorCreateManyAndReturnArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proveedors and only return the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProveedorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proveedor.
     * @param {ProveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends ProveedorDeleteArgs>(args: SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {ProveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedorUpdateArgs>(args: SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {ProveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedorUpdateManyArgs>(args: SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors and returns the data updated in the database.
     * @param {ProveedorUpdateManyAndReturnArgs} args - Arguments to update many Proveedors.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proveedors and only return the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProveedorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proveedor.
     * @param {ProveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends ProveedorUpsertArgs>(args: SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends ProveedorCountArgs>(
      args?: Subset<T, ProveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedorGroupByArgs['orderBy'] }
        : { orderBy?: ProveedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedor model
   */
  readonly fields: ProveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    egresos<T extends Proveedor$egresosArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$egresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proveedor model
   */
  interface ProveedorFieldRefs {
    readonly id: FieldRef<"Proveedor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Proveedor findUnique
   */
  export type ProveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findUniqueOrThrow
   */
  export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findFirst
   */
  export type ProveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findFirstOrThrow
   */
  export type ProveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findMany
   */
  export type ProveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedors to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor create
   */
  export type ProveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Proveedor.
     */
    data: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
  }

  /**
   * Proveedor createMany
   */
  export type ProveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor createManyAndReturn
   */
  export type ProveedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proveedor update
   */
  export type ProveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Proveedor.
     */
    data: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
    /**
     * Choose, which Proveedor to update.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor updateMany
   */
  export type ProveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor updateManyAndReturn
   */
  export type ProveedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proveedor upsert
   */
  export type ProveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Proveedor to update in case it exists.
     */
    where: ProveedorWhereUniqueInput
    /**
     * In case the Proveedor found by the `where` argument doesn't exist, create a new Proveedor with this data.
     */
    create: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
    /**
     * In case the Proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
  }

  /**
   * Proveedor delete
   */
  export type ProveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter which Proveedor to delete.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor deleteMany
   */
  export type ProveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedors to delete
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to delete.
     */
    limit?: number
  }

  /**
   * Proveedor.egresos
   */
  export type Proveedor$egresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    where?: EgresoWhereInput
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    cursor?: EgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Proveedor without action
   */
  export type ProveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
  }


  /**
   * Model Entidad
   */

  export type AggregateEntidad = {
    _count: EntidadCountAggregateOutputType | null
    _avg: EntidadAvgAggregateOutputType | null
    _sum: EntidadSumAggregateOutputType | null
    _min: EntidadMinAggregateOutputType | null
    _max: EntidadMaxAggregateOutputType | null
  }

  export type EntidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EntidadSumAggregateOutputType = {
    id: number | null
  }

  export type EntidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EntidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EntidadCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EntidadAvgAggregateInputType = {
    id?: true
  }

  export type EntidadSumAggregateInputType = {
    id?: true
  }

  export type EntidadMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EntidadMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EntidadCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EntidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entidad to aggregate.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entidads
    **/
    _count?: true | EntidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntidadMaxAggregateInputType
  }

  export type GetEntidadAggregateType<T extends EntidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEntidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntidad[P]>
      : GetScalarType<T[P], AggregateEntidad[P]>
  }




  export type EntidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadWhereInput
    orderBy?: EntidadOrderByWithAggregationInput | EntidadOrderByWithAggregationInput[]
    by: EntidadScalarFieldEnum[] | EntidadScalarFieldEnum
    having?: EntidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntidadCountAggregateInputType | true
    _avg?: EntidadAvgAggregateInputType
    _sum?: EntidadSumAggregateInputType
    _min?: EntidadMinAggregateInputType
    _max?: EntidadMaxAggregateInputType
  }

  export type EntidadGroupByOutputType = {
    id: number
    nombre: string
    _count: EntidadCountAggregateOutputType | null
    _avg: EntidadAvgAggregateOutputType | null
    _sum: EntidadSumAggregateOutputType | null
    _min: EntidadMinAggregateOutputType | null
    _max: EntidadMaxAggregateOutputType | null
  }

  type GetEntidadGroupByPayload<T extends EntidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntidadGroupByOutputType[P]>
            : GetScalarType<T[P], EntidadGroupByOutputType[P]>
        }
      >
    >


  export type EntidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    egresos?: boolean | Entidad$egresosArgs<ExtArgs>
    lanzamientos?: boolean | Entidad$lanzamientosArgs<ExtArgs>
    _count?: boolean | EntidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entidad"]>

  export type EntidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["entidad"]>

  export type EntidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["entidad"]>

  export type EntidadSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EntidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["entidad"]>
  export type EntidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egresos?: boolean | Entidad$egresosArgs<ExtArgs>
    lanzamientos?: boolean | Entidad$lanzamientosArgs<ExtArgs>
    _count?: boolean | EntidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entidad"
    objects: {
      egresos: Prisma.$EgresoPayload<ExtArgs>[]
      lanzamientos: Prisma.$LanzamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["entidad"]>
    composites: {}
  }

  type EntidadGetPayload<S extends boolean | null | undefined | EntidadDefaultArgs> = $Result.GetResult<Prisma.$EntidadPayload, S>

  type EntidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntidadCountAggregateInputType | true
    }

  export interface EntidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entidad'], meta: { name: 'Entidad' } }
    /**
     * Find zero or one Entidad that matches the filter.
     * @param {EntidadFindUniqueArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntidadFindUniqueArgs>(args: SelectSubset<T, EntidadFindUniqueArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntidadFindUniqueOrThrowArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EntidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadFindFirstArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntidadFindFirstArgs>(args?: SelectSubset<T, EntidadFindFirstArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadFindFirstOrThrowArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EntidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entidads
     * const entidads = await prisma.entidad.findMany()
     * 
     * // Get first 10 Entidads
     * const entidads = await prisma.entidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entidadWithIdOnly = await prisma.entidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntidadFindManyArgs>(args?: SelectSubset<T, EntidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entidad.
     * @param {EntidadCreateArgs} args - Arguments to create a Entidad.
     * @example
     * // Create one Entidad
     * const Entidad = await prisma.entidad.create({
     *   data: {
     *     // ... data to create a Entidad
     *   }
     * })
     * 
     */
    create<T extends EntidadCreateArgs>(args: SelectSubset<T, EntidadCreateArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entidads.
     * @param {EntidadCreateManyArgs} args - Arguments to create many Entidads.
     * @example
     * // Create many Entidads
     * const entidad = await prisma.entidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntidadCreateManyArgs>(args?: SelectSubset<T, EntidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entidads and returns the data saved in the database.
     * @param {EntidadCreateManyAndReturnArgs} args - Arguments to create many Entidads.
     * @example
     * // Create many Entidads
     * const entidad = await prisma.entidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entidads and only return the `id`
     * const entidadWithIdOnly = await prisma.entidad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntidadCreateManyAndReturnArgs>(args?: SelectSubset<T, EntidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entidad.
     * @param {EntidadDeleteArgs} args - Arguments to delete one Entidad.
     * @example
     * // Delete one Entidad
     * const Entidad = await prisma.entidad.delete({
     *   where: {
     *     // ... filter to delete one Entidad
     *   }
     * })
     * 
     */
    delete<T extends EntidadDeleteArgs>(args: SelectSubset<T, EntidadDeleteArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entidad.
     * @param {EntidadUpdateArgs} args - Arguments to update one Entidad.
     * @example
     * // Update one Entidad
     * const entidad = await prisma.entidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntidadUpdateArgs>(args: SelectSubset<T, EntidadUpdateArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entidads.
     * @param {EntidadDeleteManyArgs} args - Arguments to filter Entidads to delete.
     * @example
     * // Delete a few Entidads
     * const { count } = await prisma.entidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntidadDeleteManyArgs>(args?: SelectSubset<T, EntidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entidads
     * const entidad = await prisma.entidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntidadUpdateManyArgs>(args: SelectSubset<T, EntidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entidads and returns the data updated in the database.
     * @param {EntidadUpdateManyAndReturnArgs} args - Arguments to update many Entidads.
     * @example
     * // Update many Entidads
     * const entidad = await prisma.entidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entidads and only return the `id`
     * const entidadWithIdOnly = await prisma.entidad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntidadUpdateManyAndReturnArgs>(args: SelectSubset<T, EntidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entidad.
     * @param {EntidadUpsertArgs} args - Arguments to update or create a Entidad.
     * @example
     * // Update or create a Entidad
     * const entidad = await prisma.entidad.upsert({
     *   create: {
     *     // ... data to create a Entidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entidad we want to update
     *   }
     * })
     */
    upsert<T extends EntidadUpsertArgs>(args: SelectSubset<T, EntidadUpsertArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadCountArgs} args - Arguments to filter Entidads to count.
     * @example
     * // Count the number of Entidads
     * const count = await prisma.entidad.count({
     *   where: {
     *     // ... the filter for the Entidads we want to count
     *   }
     * })
    **/
    count<T extends EntidadCountArgs>(
      args?: Subset<T, EntidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntidadAggregateArgs>(args: Subset<T, EntidadAggregateArgs>): Prisma.PrismaPromise<GetEntidadAggregateType<T>>

    /**
     * Group by Entidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntidadGroupByArgs['orderBy'] }
        : { orderBy?: EntidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entidad model
   */
  readonly fields: EntidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    egresos<T extends Entidad$egresosArgs<ExtArgs> = {}>(args?: Subset<T, Entidad$egresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lanzamientos<T extends Entidad$lanzamientosArgs<ExtArgs> = {}>(args?: Subset<T, Entidad$lanzamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entidad model
   */
  interface EntidadFieldRefs {
    readonly id: FieldRef<"Entidad", 'Int'>
    readonly nombre: FieldRef<"Entidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entidad findUnique
   */
  export type EntidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad findUniqueOrThrow
   */
  export type EntidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad findFirst
   */
  export type EntidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entidads.
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entidads.
     */
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad findFirstOrThrow
   */
  export type EntidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entidads.
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entidads.
     */
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad findMany
   */
  export type EntidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidads to fetch.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entidads.
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad create
   */
  export type EntidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Entidad.
     */
    data: XOR<EntidadCreateInput, EntidadUncheckedCreateInput>
  }

  /**
   * Entidad createMany
   */
  export type EntidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entidads.
     */
    data: EntidadCreateManyInput | EntidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entidad createManyAndReturn
   */
  export type EntidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * The data used to create many Entidads.
     */
    data: EntidadCreateManyInput | EntidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entidad update
   */
  export type EntidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Entidad.
     */
    data: XOR<EntidadUpdateInput, EntidadUncheckedUpdateInput>
    /**
     * Choose, which Entidad to update.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad updateMany
   */
  export type EntidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entidads.
     */
    data: XOR<EntidadUpdateManyMutationInput, EntidadUncheckedUpdateManyInput>
    /**
     * Filter which Entidads to update
     */
    where?: EntidadWhereInput
    /**
     * Limit how many Entidads to update.
     */
    limit?: number
  }

  /**
   * Entidad updateManyAndReturn
   */
  export type EntidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * The data used to update Entidads.
     */
    data: XOR<EntidadUpdateManyMutationInput, EntidadUncheckedUpdateManyInput>
    /**
     * Filter which Entidads to update
     */
    where?: EntidadWhereInput
    /**
     * Limit how many Entidads to update.
     */
    limit?: number
  }

  /**
   * Entidad upsert
   */
  export type EntidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Entidad to update in case it exists.
     */
    where: EntidadWhereUniqueInput
    /**
     * In case the Entidad found by the `where` argument doesn't exist, create a new Entidad with this data.
     */
    create: XOR<EntidadCreateInput, EntidadUncheckedCreateInput>
    /**
     * In case the Entidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntidadUpdateInput, EntidadUncheckedUpdateInput>
  }

  /**
   * Entidad delete
   */
  export type EntidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter which Entidad to delete.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad deleteMany
   */
  export type EntidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entidads to delete
     */
    where?: EntidadWhereInput
    /**
     * Limit how many Entidads to delete.
     */
    limit?: number
  }

  /**
   * Entidad.egresos
   */
  export type Entidad$egresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    where?: EgresoWhereInput
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    cursor?: EgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Entidad.lanzamientos
   */
  export type Entidad$lanzamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    where?: LanzamientoWhereInput
    orderBy?: LanzamientoOrderByWithRelationInput | LanzamientoOrderByWithRelationInput[]
    cursor?: LanzamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanzamientoScalarFieldEnum | LanzamientoScalarFieldEnum[]
  }

  /**
   * Entidad without action
   */
  export type EntidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entidad
     */
    omit?: EntidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
  }


  /**
   * Model Egreso
   */

  export type AggregateEgreso = {
    _count: EgresoCountAggregateOutputType | null
    _avg: EgresoAvgAggregateOutputType | null
    _sum: EgresoSumAggregateOutputType | null
    _min: EgresoMinAggregateOutputType | null
    _max: EgresoMaxAggregateOutputType | null
  }

  export type EgresoAvgAggregateOutputType = {
    id: number | null
    personaId: number | null
    entidadId: number | null
  }

  export type EgresoSumAggregateOutputType = {
    id: number | null
    personaId: number | null
    entidadId: number | null
  }

  export type EgresoMinAggregateOutputType = {
    id: number | null
    personaId: number | null
    entidadId: number | null
  }

  export type EgresoMaxAggregateOutputType = {
    id: number | null
    personaId: number | null
    entidadId: number | null
  }

  export type EgresoCountAggregateOutputType = {
    id: number
    personaId: number
    entidadId: number
    _all: number
  }


  export type EgresoAvgAggregateInputType = {
    id?: true
    personaId?: true
    entidadId?: true
  }

  export type EgresoSumAggregateInputType = {
    id?: true
    personaId?: true
    entidadId?: true
  }

  export type EgresoMinAggregateInputType = {
    id?: true
    personaId?: true
    entidadId?: true
  }

  export type EgresoMaxAggregateInputType = {
    id?: true
    personaId?: true
    entidadId?: true
  }

  export type EgresoCountAggregateInputType = {
    id?: true
    personaId?: true
    entidadId?: true
    _all?: true
  }

  export type EgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Egreso to aggregate.
     */
    where?: EgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egresos to fetch.
     */
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Egresos
    **/
    _count?: true | EgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EgresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EgresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EgresoMaxAggregateInputType
  }

  export type GetEgresoAggregateType<T extends EgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateEgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEgreso[P]>
      : GetScalarType<T[P], AggregateEgreso[P]>
  }




  export type EgresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EgresoWhereInput
    orderBy?: EgresoOrderByWithAggregationInput | EgresoOrderByWithAggregationInput[]
    by: EgresoScalarFieldEnum[] | EgresoScalarFieldEnum
    having?: EgresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EgresoCountAggregateInputType | true
    _avg?: EgresoAvgAggregateInputType
    _sum?: EgresoSumAggregateInputType
    _min?: EgresoMinAggregateInputType
    _max?: EgresoMaxAggregateInputType
  }

  export type EgresoGroupByOutputType = {
    id: number
    personaId: number | null
    entidadId: number
    _count: EgresoCountAggregateOutputType | null
    _avg: EgresoAvgAggregateOutputType | null
    _sum: EgresoSumAggregateOutputType | null
    _min: EgresoMinAggregateOutputType | null
    _max: EgresoMaxAggregateOutputType | null
  }

  type GetEgresoGroupByPayload<T extends EgresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EgresoGroupByOutputType[P]>
            : GetScalarType<T[P], EgresoGroupByOutputType[P]>
        }
      >
    >


  export type EgresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personaId?: boolean
    entidadId?: boolean
    proveedor?: boolean | Egreso$proveedorArgs<ExtArgs>
    funcionario?: boolean | Egreso$funcionarioArgs<ExtArgs>
    persona?: boolean | Egreso$personaArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
    lanzamientos?: boolean | Egreso$lanzamientosArgs<ExtArgs>
    _count?: boolean | EgresoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["egreso"]>

  export type EgresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personaId?: boolean
    entidadId?: boolean
    proveedor?: boolean | Egreso$proveedorArgs<ExtArgs>
    funcionario?: boolean | Egreso$funcionarioArgs<ExtArgs>
    persona?: boolean | Egreso$personaArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["egreso"]>

  export type EgresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personaId?: boolean
    entidadId?: boolean
    proveedor?: boolean | Egreso$proveedorArgs<ExtArgs>
    funcionario?: boolean | Egreso$funcionarioArgs<ExtArgs>
    persona?: boolean | Egreso$personaArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["egreso"]>

  export type EgresoSelectScalar = {
    id?: boolean
    personaId?: boolean
    entidadId?: boolean
  }

  export type EgresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personaId" | "entidadId", ExtArgs["result"]["egreso"]>
  export type EgresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proveedor?: boolean | Egreso$proveedorArgs<ExtArgs>
    funcionario?: boolean | Egreso$funcionarioArgs<ExtArgs>
    persona?: boolean | Egreso$personaArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
    lanzamientos?: boolean | Egreso$lanzamientosArgs<ExtArgs>
    _count?: boolean | EgresoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EgresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proveedor?: boolean | Egreso$proveedorArgs<ExtArgs>
    funcionario?: boolean | Egreso$funcionarioArgs<ExtArgs>
    persona?: boolean | Egreso$personaArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }
  export type EgresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proveedor?: boolean | Egreso$proveedorArgs<ExtArgs>
    funcionario?: boolean | Egreso$funcionarioArgs<ExtArgs>
    persona?: boolean | Egreso$personaArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }

  export type $EgresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Egreso"
    objects: {
      proveedor: Prisma.$ProveedorPayload<ExtArgs> | null
      funcionario: Prisma.$FuncionarioPayload<ExtArgs> | null
      persona: Prisma.$PersonaPayload<ExtArgs> | null
      entidad: Prisma.$EntidadPayload<ExtArgs>
      lanzamientos: Prisma.$LanzamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      personaId: number | null
      entidadId: number
    }, ExtArgs["result"]["egreso"]>
    composites: {}
  }

  type EgresoGetPayload<S extends boolean | null | undefined | EgresoDefaultArgs> = $Result.GetResult<Prisma.$EgresoPayload, S>

  type EgresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EgresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EgresoCountAggregateInputType | true
    }

  export interface EgresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Egreso'], meta: { name: 'Egreso' } }
    /**
     * Find zero or one Egreso that matches the filter.
     * @param {EgresoFindUniqueArgs} args - Arguments to find a Egreso
     * @example
     * // Get one Egreso
     * const egreso = await prisma.egreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EgresoFindUniqueArgs>(args: SelectSubset<T, EgresoFindUniqueArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Egreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EgresoFindUniqueOrThrowArgs} args - Arguments to find a Egreso
     * @example
     * // Get one Egreso
     * const egreso = await prisma.egreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EgresoFindUniqueOrThrowArgs>(args: SelectSubset<T, EgresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoFindFirstArgs} args - Arguments to find a Egreso
     * @example
     * // Get one Egreso
     * const egreso = await prisma.egreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EgresoFindFirstArgs>(args?: SelectSubset<T, EgresoFindFirstArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoFindFirstOrThrowArgs} args - Arguments to find a Egreso
     * @example
     * // Get one Egreso
     * const egreso = await prisma.egreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EgresoFindFirstOrThrowArgs>(args?: SelectSubset<T, EgresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Egresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Egresos
     * const egresos = await prisma.egreso.findMany()
     * 
     * // Get first 10 Egresos
     * const egresos = await prisma.egreso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const egresoWithIdOnly = await prisma.egreso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EgresoFindManyArgs>(args?: SelectSubset<T, EgresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Egreso.
     * @param {EgresoCreateArgs} args - Arguments to create a Egreso.
     * @example
     * // Create one Egreso
     * const Egreso = await prisma.egreso.create({
     *   data: {
     *     // ... data to create a Egreso
     *   }
     * })
     * 
     */
    create<T extends EgresoCreateArgs>(args: SelectSubset<T, EgresoCreateArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Egresos.
     * @param {EgresoCreateManyArgs} args - Arguments to create many Egresos.
     * @example
     * // Create many Egresos
     * const egreso = await prisma.egreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EgresoCreateManyArgs>(args?: SelectSubset<T, EgresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Egresos and returns the data saved in the database.
     * @param {EgresoCreateManyAndReturnArgs} args - Arguments to create many Egresos.
     * @example
     * // Create many Egresos
     * const egreso = await prisma.egreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Egresos and only return the `id`
     * const egresoWithIdOnly = await prisma.egreso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EgresoCreateManyAndReturnArgs>(args?: SelectSubset<T, EgresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Egreso.
     * @param {EgresoDeleteArgs} args - Arguments to delete one Egreso.
     * @example
     * // Delete one Egreso
     * const Egreso = await prisma.egreso.delete({
     *   where: {
     *     // ... filter to delete one Egreso
     *   }
     * })
     * 
     */
    delete<T extends EgresoDeleteArgs>(args: SelectSubset<T, EgresoDeleteArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Egreso.
     * @param {EgresoUpdateArgs} args - Arguments to update one Egreso.
     * @example
     * // Update one Egreso
     * const egreso = await prisma.egreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EgresoUpdateArgs>(args: SelectSubset<T, EgresoUpdateArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Egresos.
     * @param {EgresoDeleteManyArgs} args - Arguments to filter Egresos to delete.
     * @example
     * // Delete a few Egresos
     * const { count } = await prisma.egreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EgresoDeleteManyArgs>(args?: SelectSubset<T, EgresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Egresos
     * const egreso = await prisma.egreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EgresoUpdateManyArgs>(args: SelectSubset<T, EgresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egresos and returns the data updated in the database.
     * @param {EgresoUpdateManyAndReturnArgs} args - Arguments to update many Egresos.
     * @example
     * // Update many Egresos
     * const egreso = await prisma.egreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Egresos and only return the `id`
     * const egresoWithIdOnly = await prisma.egreso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EgresoUpdateManyAndReturnArgs>(args: SelectSubset<T, EgresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Egreso.
     * @param {EgresoUpsertArgs} args - Arguments to update or create a Egreso.
     * @example
     * // Update or create a Egreso
     * const egreso = await prisma.egreso.upsert({
     *   create: {
     *     // ... data to create a Egreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Egreso we want to update
     *   }
     * })
     */
    upsert<T extends EgresoUpsertArgs>(args: SelectSubset<T, EgresoUpsertArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Egresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoCountArgs} args - Arguments to filter Egresos to count.
     * @example
     * // Count the number of Egresos
     * const count = await prisma.egreso.count({
     *   where: {
     *     // ... the filter for the Egresos we want to count
     *   }
     * })
    **/
    count<T extends EgresoCountArgs>(
      args?: Subset<T, EgresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Egreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EgresoAggregateArgs>(args: Subset<T, EgresoAggregateArgs>): Prisma.PrismaPromise<GetEgresoAggregateType<T>>

    /**
     * Group by Egreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgresoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EgresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EgresoGroupByArgs['orderBy'] }
        : { orderBy?: EgresoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EgresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Egreso model
   */
  readonly fields: EgresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Egreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EgresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proveedor<T extends Egreso$proveedorArgs<ExtArgs> = {}>(args?: Subset<T, Egreso$proveedorArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends Egreso$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Egreso$funcionarioArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    persona<T extends Egreso$personaArgs<ExtArgs> = {}>(args?: Subset<T, Egreso$personaArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entidad<T extends EntidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadDefaultArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lanzamientos<T extends Egreso$lanzamientosArgs<ExtArgs> = {}>(args?: Subset<T, Egreso$lanzamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Egreso model
   */
  interface EgresoFieldRefs {
    readonly id: FieldRef<"Egreso", 'Int'>
    readonly personaId: FieldRef<"Egreso", 'Int'>
    readonly entidadId: FieldRef<"Egreso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Egreso findUnique
   */
  export type EgresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * Filter, which Egreso to fetch.
     */
    where: EgresoWhereUniqueInput
  }

  /**
   * Egreso findUniqueOrThrow
   */
  export type EgresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * Filter, which Egreso to fetch.
     */
    where: EgresoWhereUniqueInput
  }

  /**
   * Egreso findFirst
   */
  export type EgresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * Filter, which Egreso to fetch.
     */
    where?: EgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egresos to fetch.
     */
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Egresos.
     */
    cursor?: EgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Egresos.
     */
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Egreso findFirstOrThrow
   */
  export type EgresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * Filter, which Egreso to fetch.
     */
    where?: EgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egresos to fetch.
     */
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Egresos.
     */
    cursor?: EgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Egresos.
     */
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Egreso findMany
   */
  export type EgresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * Filter, which Egresos to fetch.
     */
    where?: EgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egresos to fetch.
     */
    orderBy?: EgresoOrderByWithRelationInput | EgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Egresos.
     */
    cursor?: EgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egresos.
     */
    skip?: number
    distinct?: EgresoScalarFieldEnum | EgresoScalarFieldEnum[]
  }

  /**
   * Egreso create
   */
  export type EgresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * The data needed to create a Egreso.
     */
    data: XOR<EgresoCreateInput, EgresoUncheckedCreateInput>
  }

  /**
   * Egreso createMany
   */
  export type EgresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Egresos.
     */
    data: EgresoCreateManyInput | EgresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Egreso createManyAndReturn
   */
  export type EgresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * The data used to create many Egresos.
     */
    data: EgresoCreateManyInput | EgresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Egreso update
   */
  export type EgresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * The data needed to update a Egreso.
     */
    data: XOR<EgresoUpdateInput, EgresoUncheckedUpdateInput>
    /**
     * Choose, which Egreso to update.
     */
    where: EgresoWhereUniqueInput
  }

  /**
   * Egreso updateMany
   */
  export type EgresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Egresos.
     */
    data: XOR<EgresoUpdateManyMutationInput, EgresoUncheckedUpdateManyInput>
    /**
     * Filter which Egresos to update
     */
    where?: EgresoWhereInput
    /**
     * Limit how many Egresos to update.
     */
    limit?: number
  }

  /**
   * Egreso updateManyAndReturn
   */
  export type EgresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * The data used to update Egresos.
     */
    data: XOR<EgresoUpdateManyMutationInput, EgresoUncheckedUpdateManyInput>
    /**
     * Filter which Egresos to update
     */
    where?: EgresoWhereInput
    /**
     * Limit how many Egresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Egreso upsert
   */
  export type EgresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * The filter to search for the Egreso to update in case it exists.
     */
    where: EgresoWhereUniqueInput
    /**
     * In case the Egreso found by the `where` argument doesn't exist, create a new Egreso with this data.
     */
    create: XOR<EgresoCreateInput, EgresoUncheckedCreateInput>
    /**
     * In case the Egreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EgresoUpdateInput, EgresoUncheckedUpdateInput>
  }

  /**
   * Egreso delete
   */
  export type EgresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
    /**
     * Filter which Egreso to delete.
     */
    where: EgresoWhereUniqueInput
  }

  /**
   * Egreso deleteMany
   */
  export type EgresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Egresos to delete
     */
    where?: EgresoWhereInput
    /**
     * Limit how many Egresos to delete.
     */
    limit?: number
  }

  /**
   * Egreso.proveedor
   */
  export type Egreso$proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    where?: ProveedorWhereInput
  }

  /**
   * Egreso.funcionario
   */
  export type Egreso$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
  }

  /**
   * Egreso.persona
   */
  export type Egreso$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    where?: PersonaWhereInput
  }

  /**
   * Egreso.lanzamientos
   */
  export type Egreso$lanzamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    where?: LanzamientoWhereInput
    orderBy?: LanzamientoOrderByWithRelationInput | LanzamientoOrderByWithRelationInput[]
    cursor?: LanzamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanzamientoScalarFieldEnum | LanzamientoScalarFieldEnum[]
  }

  /**
   * Egreso without action
   */
  export type EgresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egreso
     */
    select?: EgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egreso
     */
    omit?: EgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgresoInclude<ExtArgs> | null
  }


  /**
   * Model Lanzamiento
   */

  export type AggregateLanzamiento = {
    _count: LanzamientoCountAggregateOutputType | null
    _avg: LanzamientoAvgAggregateOutputType | null
    _sum: LanzamientoSumAggregateOutputType | null
    _min: LanzamientoMinAggregateOutputType | null
    _max: LanzamientoMaxAggregateOutputType | null
  }

  export type LanzamientoAvgAggregateOutputType = {
    id: number | null
    egresoId: number | null
    entidadId: number | null
  }

  export type LanzamientoSumAggregateOutputType = {
    id: number | null
    egresoId: number | null
    entidadId: number | null
  }

  export type LanzamientoMinAggregateOutputType = {
    id: number | null
    egresoId: number | null
    entidadId: number | null
  }

  export type LanzamientoMaxAggregateOutputType = {
    id: number | null
    egresoId: number | null
    entidadId: number | null
  }

  export type LanzamientoCountAggregateOutputType = {
    id: number
    egresoId: number
    entidadId: number
    _all: number
  }


  export type LanzamientoAvgAggregateInputType = {
    id?: true
    egresoId?: true
    entidadId?: true
  }

  export type LanzamientoSumAggregateInputType = {
    id?: true
    egresoId?: true
    entidadId?: true
  }

  export type LanzamientoMinAggregateInputType = {
    id?: true
    egresoId?: true
    entidadId?: true
  }

  export type LanzamientoMaxAggregateInputType = {
    id?: true
    egresoId?: true
    entidadId?: true
  }

  export type LanzamientoCountAggregateInputType = {
    id?: true
    egresoId?: true
    entidadId?: true
    _all?: true
  }

  export type LanzamientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lanzamiento to aggregate.
     */
    where?: LanzamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanzamientos to fetch.
     */
    orderBy?: LanzamientoOrderByWithRelationInput | LanzamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanzamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanzamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanzamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lanzamientos
    **/
    _count?: true | LanzamientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanzamientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanzamientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanzamientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanzamientoMaxAggregateInputType
  }

  export type GetLanzamientoAggregateType<T extends LanzamientoAggregateArgs> = {
        [P in keyof T & keyof AggregateLanzamiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanzamiento[P]>
      : GetScalarType<T[P], AggregateLanzamiento[P]>
  }




  export type LanzamientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanzamientoWhereInput
    orderBy?: LanzamientoOrderByWithAggregationInput | LanzamientoOrderByWithAggregationInput[]
    by: LanzamientoScalarFieldEnum[] | LanzamientoScalarFieldEnum
    having?: LanzamientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanzamientoCountAggregateInputType | true
    _avg?: LanzamientoAvgAggregateInputType
    _sum?: LanzamientoSumAggregateInputType
    _min?: LanzamientoMinAggregateInputType
    _max?: LanzamientoMaxAggregateInputType
  }

  export type LanzamientoGroupByOutputType = {
    id: number
    egresoId: number
    entidadId: number
    _count: LanzamientoCountAggregateOutputType | null
    _avg: LanzamientoAvgAggregateOutputType | null
    _sum: LanzamientoSumAggregateOutputType | null
    _min: LanzamientoMinAggregateOutputType | null
    _max: LanzamientoMaxAggregateOutputType | null
  }

  type GetLanzamientoGroupByPayload<T extends LanzamientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanzamientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanzamientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanzamientoGroupByOutputType[P]>
            : GetScalarType<T[P], LanzamientoGroupByOutputType[P]>
        }
      >
    >


  export type LanzamientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    egresoId?: boolean
    entidadId?: boolean
    egreso?: boolean | EgresoDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lanzamiento"]>

  export type LanzamientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    egresoId?: boolean
    entidadId?: boolean
    egreso?: boolean | EgresoDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lanzamiento"]>

  export type LanzamientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    egresoId?: boolean
    entidadId?: boolean
    egreso?: boolean | EgresoDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lanzamiento"]>

  export type LanzamientoSelectScalar = {
    id?: boolean
    egresoId?: boolean
    entidadId?: boolean
  }

  export type LanzamientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "egresoId" | "entidadId", ExtArgs["result"]["lanzamiento"]>
  export type LanzamientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egreso?: boolean | EgresoDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }
  export type LanzamientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egreso?: boolean | EgresoDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }
  export type LanzamientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egreso?: boolean | EgresoDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }

  export type $LanzamientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lanzamiento"
    objects: {
      egreso: Prisma.$EgresoPayload<ExtArgs>
      entidad: Prisma.$EntidadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      egresoId: number
      entidadId: number
    }, ExtArgs["result"]["lanzamiento"]>
    composites: {}
  }

  type LanzamientoGetPayload<S extends boolean | null | undefined | LanzamientoDefaultArgs> = $Result.GetResult<Prisma.$LanzamientoPayload, S>

  type LanzamientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanzamientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanzamientoCountAggregateInputType | true
    }

  export interface LanzamientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lanzamiento'], meta: { name: 'Lanzamiento' } }
    /**
     * Find zero or one Lanzamiento that matches the filter.
     * @param {LanzamientoFindUniqueArgs} args - Arguments to find a Lanzamiento
     * @example
     * // Get one Lanzamiento
     * const lanzamiento = await prisma.lanzamiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanzamientoFindUniqueArgs>(args: SelectSubset<T, LanzamientoFindUniqueArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lanzamiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanzamientoFindUniqueOrThrowArgs} args - Arguments to find a Lanzamiento
     * @example
     * // Get one Lanzamiento
     * const lanzamiento = await prisma.lanzamiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanzamientoFindUniqueOrThrowArgs>(args: SelectSubset<T, LanzamientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lanzamiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoFindFirstArgs} args - Arguments to find a Lanzamiento
     * @example
     * // Get one Lanzamiento
     * const lanzamiento = await prisma.lanzamiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanzamientoFindFirstArgs>(args?: SelectSubset<T, LanzamientoFindFirstArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lanzamiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoFindFirstOrThrowArgs} args - Arguments to find a Lanzamiento
     * @example
     * // Get one Lanzamiento
     * const lanzamiento = await prisma.lanzamiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanzamientoFindFirstOrThrowArgs>(args?: SelectSubset<T, LanzamientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lanzamientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lanzamientos
     * const lanzamientos = await prisma.lanzamiento.findMany()
     * 
     * // Get first 10 Lanzamientos
     * const lanzamientos = await prisma.lanzamiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lanzamientoWithIdOnly = await prisma.lanzamiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanzamientoFindManyArgs>(args?: SelectSubset<T, LanzamientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lanzamiento.
     * @param {LanzamientoCreateArgs} args - Arguments to create a Lanzamiento.
     * @example
     * // Create one Lanzamiento
     * const Lanzamiento = await prisma.lanzamiento.create({
     *   data: {
     *     // ... data to create a Lanzamiento
     *   }
     * })
     * 
     */
    create<T extends LanzamientoCreateArgs>(args: SelectSubset<T, LanzamientoCreateArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lanzamientos.
     * @param {LanzamientoCreateManyArgs} args - Arguments to create many Lanzamientos.
     * @example
     * // Create many Lanzamientos
     * const lanzamiento = await prisma.lanzamiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanzamientoCreateManyArgs>(args?: SelectSubset<T, LanzamientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lanzamientos and returns the data saved in the database.
     * @param {LanzamientoCreateManyAndReturnArgs} args - Arguments to create many Lanzamientos.
     * @example
     * // Create many Lanzamientos
     * const lanzamiento = await prisma.lanzamiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lanzamientos and only return the `id`
     * const lanzamientoWithIdOnly = await prisma.lanzamiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanzamientoCreateManyAndReturnArgs>(args?: SelectSubset<T, LanzamientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lanzamiento.
     * @param {LanzamientoDeleteArgs} args - Arguments to delete one Lanzamiento.
     * @example
     * // Delete one Lanzamiento
     * const Lanzamiento = await prisma.lanzamiento.delete({
     *   where: {
     *     // ... filter to delete one Lanzamiento
     *   }
     * })
     * 
     */
    delete<T extends LanzamientoDeleteArgs>(args: SelectSubset<T, LanzamientoDeleteArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lanzamiento.
     * @param {LanzamientoUpdateArgs} args - Arguments to update one Lanzamiento.
     * @example
     * // Update one Lanzamiento
     * const lanzamiento = await prisma.lanzamiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanzamientoUpdateArgs>(args: SelectSubset<T, LanzamientoUpdateArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lanzamientos.
     * @param {LanzamientoDeleteManyArgs} args - Arguments to filter Lanzamientos to delete.
     * @example
     * // Delete a few Lanzamientos
     * const { count } = await prisma.lanzamiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanzamientoDeleteManyArgs>(args?: SelectSubset<T, LanzamientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lanzamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lanzamientos
     * const lanzamiento = await prisma.lanzamiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanzamientoUpdateManyArgs>(args: SelectSubset<T, LanzamientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lanzamientos and returns the data updated in the database.
     * @param {LanzamientoUpdateManyAndReturnArgs} args - Arguments to update many Lanzamientos.
     * @example
     * // Update many Lanzamientos
     * const lanzamiento = await prisma.lanzamiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lanzamientos and only return the `id`
     * const lanzamientoWithIdOnly = await prisma.lanzamiento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanzamientoUpdateManyAndReturnArgs>(args: SelectSubset<T, LanzamientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lanzamiento.
     * @param {LanzamientoUpsertArgs} args - Arguments to update or create a Lanzamiento.
     * @example
     * // Update or create a Lanzamiento
     * const lanzamiento = await prisma.lanzamiento.upsert({
     *   create: {
     *     // ... data to create a Lanzamiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lanzamiento we want to update
     *   }
     * })
     */
    upsert<T extends LanzamientoUpsertArgs>(args: SelectSubset<T, LanzamientoUpsertArgs<ExtArgs>>): Prisma__LanzamientoClient<$Result.GetResult<Prisma.$LanzamientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lanzamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoCountArgs} args - Arguments to filter Lanzamientos to count.
     * @example
     * // Count the number of Lanzamientos
     * const count = await prisma.lanzamiento.count({
     *   where: {
     *     // ... the filter for the Lanzamientos we want to count
     *   }
     * })
    **/
    count<T extends LanzamientoCountArgs>(
      args?: Subset<T, LanzamientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanzamientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lanzamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanzamientoAggregateArgs>(args: Subset<T, LanzamientoAggregateArgs>): Prisma.PrismaPromise<GetLanzamientoAggregateType<T>>

    /**
     * Group by Lanzamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanzamientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanzamientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanzamientoGroupByArgs['orderBy'] }
        : { orderBy?: LanzamientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanzamientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanzamientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lanzamiento model
   */
  readonly fields: LanzamientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lanzamiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanzamientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    egreso<T extends EgresoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EgresoDefaultArgs<ExtArgs>>): Prisma__EgresoClient<$Result.GetResult<Prisma.$EgresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entidad<T extends EntidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadDefaultArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lanzamiento model
   */
  interface LanzamientoFieldRefs {
    readonly id: FieldRef<"Lanzamiento", 'Int'>
    readonly egresoId: FieldRef<"Lanzamiento", 'Int'>
    readonly entidadId: FieldRef<"Lanzamiento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lanzamiento findUnique
   */
  export type LanzamientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * Filter, which Lanzamiento to fetch.
     */
    where: LanzamientoWhereUniqueInput
  }

  /**
   * Lanzamiento findUniqueOrThrow
   */
  export type LanzamientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * Filter, which Lanzamiento to fetch.
     */
    where: LanzamientoWhereUniqueInput
  }

  /**
   * Lanzamiento findFirst
   */
  export type LanzamientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * Filter, which Lanzamiento to fetch.
     */
    where?: LanzamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanzamientos to fetch.
     */
    orderBy?: LanzamientoOrderByWithRelationInput | LanzamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lanzamientos.
     */
    cursor?: LanzamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanzamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanzamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lanzamientos.
     */
    distinct?: LanzamientoScalarFieldEnum | LanzamientoScalarFieldEnum[]
  }

  /**
   * Lanzamiento findFirstOrThrow
   */
  export type LanzamientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * Filter, which Lanzamiento to fetch.
     */
    where?: LanzamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanzamientos to fetch.
     */
    orderBy?: LanzamientoOrderByWithRelationInput | LanzamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lanzamientos.
     */
    cursor?: LanzamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanzamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanzamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lanzamientos.
     */
    distinct?: LanzamientoScalarFieldEnum | LanzamientoScalarFieldEnum[]
  }

  /**
   * Lanzamiento findMany
   */
  export type LanzamientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * Filter, which Lanzamientos to fetch.
     */
    where?: LanzamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanzamientos to fetch.
     */
    orderBy?: LanzamientoOrderByWithRelationInput | LanzamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lanzamientos.
     */
    cursor?: LanzamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanzamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanzamientos.
     */
    skip?: number
    distinct?: LanzamientoScalarFieldEnum | LanzamientoScalarFieldEnum[]
  }

  /**
   * Lanzamiento create
   */
  export type LanzamientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Lanzamiento.
     */
    data: XOR<LanzamientoCreateInput, LanzamientoUncheckedCreateInput>
  }

  /**
   * Lanzamiento createMany
   */
  export type LanzamientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lanzamientos.
     */
    data: LanzamientoCreateManyInput | LanzamientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lanzamiento createManyAndReturn
   */
  export type LanzamientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * The data used to create many Lanzamientos.
     */
    data: LanzamientoCreateManyInput | LanzamientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lanzamiento update
   */
  export type LanzamientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Lanzamiento.
     */
    data: XOR<LanzamientoUpdateInput, LanzamientoUncheckedUpdateInput>
    /**
     * Choose, which Lanzamiento to update.
     */
    where: LanzamientoWhereUniqueInput
  }

  /**
   * Lanzamiento updateMany
   */
  export type LanzamientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lanzamientos.
     */
    data: XOR<LanzamientoUpdateManyMutationInput, LanzamientoUncheckedUpdateManyInput>
    /**
     * Filter which Lanzamientos to update
     */
    where?: LanzamientoWhereInput
    /**
     * Limit how many Lanzamientos to update.
     */
    limit?: number
  }

  /**
   * Lanzamiento updateManyAndReturn
   */
  export type LanzamientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * The data used to update Lanzamientos.
     */
    data: XOR<LanzamientoUpdateManyMutationInput, LanzamientoUncheckedUpdateManyInput>
    /**
     * Filter which Lanzamientos to update
     */
    where?: LanzamientoWhereInput
    /**
     * Limit how many Lanzamientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lanzamiento upsert
   */
  export type LanzamientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Lanzamiento to update in case it exists.
     */
    where: LanzamientoWhereUniqueInput
    /**
     * In case the Lanzamiento found by the `where` argument doesn't exist, create a new Lanzamiento with this data.
     */
    create: XOR<LanzamientoCreateInput, LanzamientoUncheckedCreateInput>
    /**
     * In case the Lanzamiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanzamientoUpdateInput, LanzamientoUncheckedUpdateInput>
  }

  /**
   * Lanzamiento delete
   */
  export type LanzamientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
    /**
     * Filter which Lanzamiento to delete.
     */
    where: LanzamientoWhereUniqueInput
  }

  /**
   * Lanzamiento deleteMany
   */
  export type LanzamientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lanzamientos to delete
     */
    where?: LanzamientoWhereInput
    /**
     * Limit how many Lanzamientos to delete.
     */
    limit?: number
  }

  /**
   * Lanzamiento without action
   */
  export type LanzamientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanzamiento
     */
    select?: LanzamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanzamiento
     */
    omit?: LanzamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanzamientoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const ProveedorScalarFieldEnum: {
    id: 'id'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const EntidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EntidadScalarFieldEnum = (typeof EntidadScalarFieldEnum)[keyof typeof EntidadScalarFieldEnum]


  export const EgresoScalarFieldEnum: {
    id: 'id',
    personaId: 'personaId',
    entidadId: 'entidadId'
  };

  export type EgresoScalarFieldEnum = (typeof EgresoScalarFieldEnum)[keyof typeof EgresoScalarFieldEnum]


  export const LanzamientoScalarFieldEnum: {
    id: 'id',
    egresoId: 'egresoId',
    entidadId: 'entidadId'
  };

  export type LanzamientoScalarFieldEnum = (typeof LanzamientoScalarFieldEnum)[keyof typeof LanzamientoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    id?: IntFilter<"Persona"> | number
    nombre?: StringFilter<"Persona"> | string
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    proveedor?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
    egresos?: EgresoListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    funcionario?: FuncionarioOrderByWithRelationInput
    proveedor?: ProveedorOrderByWithRelationInput
    egresos?: EgresoOrderByRelationAggregateInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    nombre?: StringFilter<"Persona"> | string
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    proveedor?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
    egresos?: EgresoListRelationFilter
  }, "id">

  export type PersonaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PersonaCountOrderByAggregateInput
    _avg?: PersonaAvgOrderByAggregateInput
    _max?: PersonaMaxOrderByAggregateInput
    _min?: PersonaMinOrderByAggregateInput
    _sum?: PersonaSumOrderByAggregateInput
  }

  export type PersonaScalarWhereWithAggregatesInput = {
    AND?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    OR?: PersonaScalarWhereWithAggregatesInput[]
    NOT?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Persona"> | number
    nombre?: StringWithAggregatesFilter<"Persona"> | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    egresos?: EgresoListRelationFilter
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    persona?: PersonaOrderByWithRelationInput
    egresos?: EgresoOrderByRelationAggregateInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    egresos?: EgresoListRelationFilter
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
  }

  export type ProveedorWhereInput = {
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    id?: IntFilter<"Proveedor"> | number
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    egresos?: EgresoListRelationFilter
  }

  export type ProveedorOrderByWithRelationInput = {
    id?: SortOrder
    persona?: PersonaOrderByWithRelationInput
    egresos?: EgresoOrderByRelationAggregateInput
  }

  export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    egresos?: EgresoListRelationFilter
  }, "id">

  export type ProveedorOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ProveedorCountOrderByAggregateInput
    _avg?: ProveedorAvgOrderByAggregateInput
    _max?: ProveedorMaxOrderByAggregateInput
    _min?: ProveedorMinOrderByAggregateInput
    _sum?: ProveedorSumOrderByAggregateInput
  }

  export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    OR?: ProveedorScalarWhereWithAggregatesInput[]
    NOT?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proveedor"> | number
  }

  export type EntidadWhereInput = {
    AND?: EntidadWhereInput | EntidadWhereInput[]
    OR?: EntidadWhereInput[]
    NOT?: EntidadWhereInput | EntidadWhereInput[]
    id?: IntFilter<"Entidad"> | number
    nombre?: StringFilter<"Entidad"> | string
    egresos?: EgresoListRelationFilter
    lanzamientos?: LanzamientoListRelationFilter
  }

  export type EntidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    egresos?: EgresoOrderByRelationAggregateInput
    lanzamientos?: LanzamientoOrderByRelationAggregateInput
  }

  export type EntidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntidadWhereInput | EntidadWhereInput[]
    OR?: EntidadWhereInput[]
    NOT?: EntidadWhereInput | EntidadWhereInput[]
    nombre?: StringFilter<"Entidad"> | string
    egresos?: EgresoListRelationFilter
    lanzamientos?: LanzamientoListRelationFilter
  }, "id">

  export type EntidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EntidadCountOrderByAggregateInput
    _avg?: EntidadAvgOrderByAggregateInput
    _max?: EntidadMaxOrderByAggregateInput
    _min?: EntidadMinOrderByAggregateInput
    _sum?: EntidadSumOrderByAggregateInput
  }

  export type EntidadScalarWhereWithAggregatesInput = {
    AND?: EntidadScalarWhereWithAggregatesInput | EntidadScalarWhereWithAggregatesInput[]
    OR?: EntidadScalarWhereWithAggregatesInput[]
    NOT?: EntidadScalarWhereWithAggregatesInput | EntidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entidad"> | number
    nombre?: StringWithAggregatesFilter<"Entidad"> | string
  }

  export type EgresoWhereInput = {
    AND?: EgresoWhereInput | EgresoWhereInput[]
    OR?: EgresoWhereInput[]
    NOT?: EgresoWhereInput | EgresoWhereInput[]
    id?: IntFilter<"Egreso"> | number
    personaId?: IntNullableFilter<"Egreso"> | number | null
    entidadId?: IntFilter<"Egreso"> | number
    proveedor?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    entidad?: XOR<EntidadScalarRelationFilter, EntidadWhereInput>
    lanzamientos?: LanzamientoListRelationFilter
  }

  export type EgresoOrderByWithRelationInput = {
    id?: SortOrder
    personaId?: SortOrderInput | SortOrder
    entidadId?: SortOrder
    proveedor?: ProveedorOrderByWithRelationInput
    funcionario?: FuncionarioOrderByWithRelationInput
    persona?: PersonaOrderByWithRelationInput
    entidad?: EntidadOrderByWithRelationInput
    lanzamientos?: LanzamientoOrderByRelationAggregateInput
  }

  export type EgresoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EgresoWhereInput | EgresoWhereInput[]
    OR?: EgresoWhereInput[]
    NOT?: EgresoWhereInput | EgresoWhereInput[]
    personaId?: IntNullableFilter<"Egreso"> | number | null
    entidadId?: IntFilter<"Egreso"> | number
    proveedor?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    entidad?: XOR<EntidadScalarRelationFilter, EntidadWhereInput>
    lanzamientos?: LanzamientoListRelationFilter
  }, "id">

  export type EgresoOrderByWithAggregationInput = {
    id?: SortOrder
    personaId?: SortOrderInput | SortOrder
    entidadId?: SortOrder
    _count?: EgresoCountOrderByAggregateInput
    _avg?: EgresoAvgOrderByAggregateInput
    _max?: EgresoMaxOrderByAggregateInput
    _min?: EgresoMinOrderByAggregateInput
    _sum?: EgresoSumOrderByAggregateInput
  }

  export type EgresoScalarWhereWithAggregatesInput = {
    AND?: EgresoScalarWhereWithAggregatesInput | EgresoScalarWhereWithAggregatesInput[]
    OR?: EgresoScalarWhereWithAggregatesInput[]
    NOT?: EgresoScalarWhereWithAggregatesInput | EgresoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Egreso"> | number
    personaId?: IntNullableWithAggregatesFilter<"Egreso"> | number | null
    entidadId?: IntWithAggregatesFilter<"Egreso"> | number
  }

  export type LanzamientoWhereInput = {
    AND?: LanzamientoWhereInput | LanzamientoWhereInput[]
    OR?: LanzamientoWhereInput[]
    NOT?: LanzamientoWhereInput | LanzamientoWhereInput[]
    id?: IntFilter<"Lanzamiento"> | number
    egresoId?: IntFilter<"Lanzamiento"> | number
    entidadId?: IntFilter<"Lanzamiento"> | number
    egreso?: XOR<EgresoScalarRelationFilter, EgresoWhereInput>
    entidad?: XOR<EntidadScalarRelationFilter, EntidadWhereInput>
  }

  export type LanzamientoOrderByWithRelationInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
    egreso?: EgresoOrderByWithRelationInput
    entidad?: EntidadOrderByWithRelationInput
  }

  export type LanzamientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LanzamientoWhereInput | LanzamientoWhereInput[]
    OR?: LanzamientoWhereInput[]
    NOT?: LanzamientoWhereInput | LanzamientoWhereInput[]
    egresoId?: IntFilter<"Lanzamiento"> | number
    entidadId?: IntFilter<"Lanzamiento"> | number
    egreso?: XOR<EgresoScalarRelationFilter, EgresoWhereInput>
    entidad?: XOR<EntidadScalarRelationFilter, EntidadWhereInput>
  }, "id">

  export type LanzamientoOrderByWithAggregationInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
    _count?: LanzamientoCountOrderByAggregateInput
    _avg?: LanzamientoAvgOrderByAggregateInput
    _max?: LanzamientoMaxOrderByAggregateInput
    _min?: LanzamientoMinOrderByAggregateInput
    _sum?: LanzamientoSumOrderByAggregateInput
  }

  export type LanzamientoScalarWhereWithAggregatesInput = {
    AND?: LanzamientoScalarWhereWithAggregatesInput | LanzamientoScalarWhereWithAggregatesInput[]
    OR?: LanzamientoScalarWhereWithAggregatesInput[]
    NOT?: LanzamientoScalarWhereWithAggregatesInput | LanzamientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lanzamiento"> | number
    egresoId?: IntWithAggregatesFilter<"Lanzamiento"> | number
    entidadId?: IntWithAggregatesFilter<"Lanzamiento"> | number
  }

  export type PersonaCreateInput = {
    nombre: string
    funcionario?: FuncionarioCreateNestedOneWithoutPersonaInput
    proveedor?: ProveedorCreateNestedOneWithoutPersonaInput
    egresos?: EgresoCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateInput = {
    id?: number
    nombre: string
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutPersonaInput
    proveedor?: ProveedorUncheckedCreateNestedOneWithoutPersonaInput
    egresos?: EgresoUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    funcionario?: FuncionarioUpdateOneWithoutPersonaNestedInput
    proveedor?: ProveedorUpdateOneWithoutPersonaNestedInput
    egresos?: EgresoUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    funcionario?: FuncionarioUncheckedUpdateOneWithoutPersonaNestedInput
    proveedor?: ProveedorUncheckedUpdateOneWithoutPersonaNestedInput
    egresos?: EgresoUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PersonaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PersonaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioCreateInput = {
    persona: PersonaCreateNestedOneWithoutFuncionarioInput
    egresos?: EgresoCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id: number
    egresos?: EgresoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUpdateInput = {
    persona?: PersonaUpdateOneRequiredWithoutFuncionarioNestedInput
    egresos?: EgresoUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    egresos?: EgresoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioCreateManyInput = {
    id: number
  }

  export type FuncionarioUpdateManyMutationInput = {

  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProveedorCreateInput = {
    persona: PersonaCreateNestedOneWithoutProveedorInput
    egresos?: EgresoCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateInput = {
    id: number
    egresos?: EgresoUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUpdateInput = {
    persona?: PersonaUpdateOneRequiredWithoutProveedorNestedInput
    egresos?: EgresoUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    egresos?: EgresoUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorCreateManyInput = {
    id: number
  }

  export type ProveedorUpdateManyMutationInput = {

  }

  export type ProveedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type EntidadCreateInput = {
    nombre: string
    egresos?: EgresoCreateNestedManyWithoutEntidadInput
    lanzamientos?: LanzamientoCreateNestedManyWithoutEntidadInput
  }

  export type EntidadUncheckedCreateInput = {
    id?: number
    nombre: string
    egresos?: EgresoUncheckedCreateNestedManyWithoutEntidadInput
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEntidadInput
  }

  export type EntidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    egresos?: EgresoUpdateManyWithoutEntidadNestedInput
    lanzamientos?: LanzamientoUpdateManyWithoutEntidadNestedInput
  }

  export type EntidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    egresos?: EgresoUncheckedUpdateManyWithoutEntidadNestedInput
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEntidadNestedInput
  }

  export type EntidadCreateManyInput = {
    id?: number
    nombre: string
  }

  export type EntidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EntidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EgresoCreateInput = {
    proveedor?: ProveedorCreateNestedOneWithoutEgresosInput
    funcionario?: FuncionarioCreateNestedOneWithoutEgresosInput
    persona?: PersonaCreateNestedOneWithoutEgresosInput
    entidad: EntidadCreateNestedOneWithoutEgresosInput
    lanzamientos?: LanzamientoCreateNestedManyWithoutEgresoInput
  }

  export type EgresoUncheckedCreateInput = {
    id?: number
    personaId?: number | null
    entidadId: number
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEgresoInput
  }

  export type EgresoUpdateInput = {
    proveedor?: ProveedorUpdateOneWithoutEgresosNestedInput
    funcionario?: FuncionarioUpdateOneWithoutEgresosNestedInput
    persona?: PersonaUpdateOneWithoutEgresosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutEgresosNestedInput
    lanzamientos?: LanzamientoUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    personaId?: NullableIntFieldUpdateOperationsInput | number | null
    entidadId?: IntFieldUpdateOperationsInput | number
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoCreateManyInput = {
    id?: number
    personaId?: number | null
    entidadId: number
  }

  export type EgresoUpdateManyMutationInput = {

  }

  export type EgresoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    personaId?: NullableIntFieldUpdateOperationsInput | number | null
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type LanzamientoCreateInput = {
    egreso: EgresoCreateNestedOneWithoutLanzamientosInput
    entidad: EntidadCreateNestedOneWithoutLanzamientosInput
  }

  export type LanzamientoUncheckedCreateInput = {
    id?: number
    egresoId: number
    entidadId: number
  }

  export type LanzamientoUpdateInput = {
    egreso?: EgresoUpdateOneRequiredWithoutLanzamientosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutLanzamientosNestedInput
  }

  export type LanzamientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    egresoId?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type LanzamientoCreateManyInput = {
    id?: number
    egresoId: number
    entidadId: number
  }

  export type LanzamientoUpdateManyMutationInput = {

  }

  export type LanzamientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    egresoId?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FuncionarioNullableScalarRelationFilter = {
    is?: FuncionarioWhereInput | null
    isNot?: FuncionarioWhereInput | null
  }

  export type ProveedorNullableScalarRelationFilter = {
    is?: ProveedorWhereInput | null
    isNot?: ProveedorWhereInput | null
  }

  export type EgresoListRelationFilter = {
    every?: EgresoWhereInput
    some?: EgresoWhereInput
    none?: EgresoWhereInput
  }

  export type EgresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PersonaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PersonaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PersonaScalarRelationFilter = {
    is?: PersonaWhereInput
    isNot?: PersonaWhereInput
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProveedorCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProveedorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProveedorMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProveedorMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProveedorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanzamientoListRelationFilter = {
    every?: LanzamientoWhereInput
    some?: LanzamientoWhereInput
    none?: LanzamientoWhereInput
  }

  export type LanzamientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EntidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EntidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EntidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PersonaNullableScalarRelationFilter = {
    is?: PersonaWhereInput | null
    isNot?: PersonaWhereInput | null
  }

  export type EntidadScalarRelationFilter = {
    is?: EntidadWhereInput
    isNot?: EntidadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EgresoCountOrderByAggregateInput = {
    id?: SortOrder
    personaId?: SortOrder
    entidadId?: SortOrder
  }

  export type EgresoAvgOrderByAggregateInput = {
    id?: SortOrder
    personaId?: SortOrder
    entidadId?: SortOrder
  }

  export type EgresoMaxOrderByAggregateInput = {
    id?: SortOrder
    personaId?: SortOrder
    entidadId?: SortOrder
  }

  export type EgresoMinOrderByAggregateInput = {
    id?: SortOrder
    personaId?: SortOrder
    entidadId?: SortOrder
  }

  export type EgresoSumOrderByAggregateInput = {
    id?: SortOrder
    personaId?: SortOrder
    entidadId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EgresoScalarRelationFilter = {
    is?: EgresoWhereInput
    isNot?: EgresoWhereInput
  }

  export type LanzamientoCountOrderByAggregateInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
  }

  export type LanzamientoAvgOrderByAggregateInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
  }

  export type LanzamientoMaxOrderByAggregateInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
  }

  export type LanzamientoMinOrderByAggregateInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
  }

  export type LanzamientoSumOrderByAggregateInput = {
    id?: SortOrder
    egresoId?: SortOrder
    entidadId?: SortOrder
  }

  export type FuncionarioCreateNestedOneWithoutPersonaInput = {
    create?: XOR<FuncionarioCreateWithoutPersonaInput, FuncionarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutPersonaInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type ProveedorCreateNestedOneWithoutPersonaInput = {
    create?: XOR<ProveedorCreateWithoutPersonaInput, ProveedorUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutPersonaInput
    connect?: ProveedorWhereUniqueInput
  }

  export type EgresoCreateNestedManyWithoutPersonaInput = {
    create?: XOR<EgresoCreateWithoutPersonaInput, EgresoUncheckedCreateWithoutPersonaInput> | EgresoCreateWithoutPersonaInput[] | EgresoUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutPersonaInput | EgresoCreateOrConnectWithoutPersonaInput[]
    createMany?: EgresoCreateManyPersonaInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: XOR<FuncionarioCreateWithoutPersonaInput, FuncionarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutPersonaInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type ProveedorUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: XOR<ProveedorCreateWithoutPersonaInput, ProveedorUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutPersonaInput
    connect?: ProveedorWhereUniqueInput
  }

  export type EgresoUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<EgresoCreateWithoutPersonaInput, EgresoUncheckedCreateWithoutPersonaInput> | EgresoCreateWithoutPersonaInput[] | EgresoUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutPersonaInput | EgresoCreateOrConnectWithoutPersonaInput[]
    createMany?: EgresoCreateManyPersonaInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FuncionarioUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<FuncionarioCreateWithoutPersonaInput, FuncionarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutPersonaInput
    upsert?: FuncionarioUpsertWithoutPersonaInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutPersonaInput, FuncionarioUpdateWithoutPersonaInput>, FuncionarioUncheckedUpdateWithoutPersonaInput>
  }

  export type ProveedorUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<ProveedorCreateWithoutPersonaInput, ProveedorUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutPersonaInput
    upsert?: ProveedorUpsertWithoutPersonaInput
    disconnect?: ProveedorWhereInput | boolean
    delete?: ProveedorWhereInput | boolean
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutPersonaInput, ProveedorUpdateWithoutPersonaInput>, ProveedorUncheckedUpdateWithoutPersonaInput>
  }

  export type EgresoUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<EgresoCreateWithoutPersonaInput, EgresoUncheckedCreateWithoutPersonaInput> | EgresoCreateWithoutPersonaInput[] | EgresoUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutPersonaInput | EgresoCreateOrConnectWithoutPersonaInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutPersonaInput | EgresoUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: EgresoCreateManyPersonaInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutPersonaInput | EgresoUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutPersonaInput | EgresoUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FuncionarioUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<FuncionarioCreateWithoutPersonaInput, FuncionarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutPersonaInput
    upsert?: FuncionarioUpsertWithoutPersonaInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutPersonaInput, FuncionarioUpdateWithoutPersonaInput>, FuncionarioUncheckedUpdateWithoutPersonaInput>
  }

  export type ProveedorUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<ProveedorCreateWithoutPersonaInput, ProveedorUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutPersonaInput
    upsert?: ProveedorUpsertWithoutPersonaInput
    disconnect?: ProveedorWhereInput | boolean
    delete?: ProveedorWhereInput | boolean
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutPersonaInput, ProveedorUpdateWithoutPersonaInput>, ProveedorUncheckedUpdateWithoutPersonaInput>
  }

  export type EgresoUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<EgresoCreateWithoutPersonaInput, EgresoUncheckedCreateWithoutPersonaInput> | EgresoCreateWithoutPersonaInput[] | EgresoUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutPersonaInput | EgresoCreateOrConnectWithoutPersonaInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutPersonaInput | EgresoUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: EgresoCreateManyPersonaInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutPersonaInput | EgresoUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutPersonaInput | EgresoUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type PersonaCreateNestedOneWithoutFuncionarioInput = {
    create?: XOR<PersonaCreateWithoutFuncionarioInput, PersonaUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutFuncionarioInput
    connect?: PersonaWhereUniqueInput
  }

  export type EgresoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<EgresoCreateWithoutFuncionarioInput, EgresoUncheckedCreateWithoutFuncionarioInput> | EgresoCreateWithoutFuncionarioInput[] | EgresoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutFuncionarioInput | EgresoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: EgresoCreateManyFuncionarioInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type EgresoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<EgresoCreateWithoutFuncionarioInput, EgresoUncheckedCreateWithoutFuncionarioInput> | EgresoCreateWithoutFuncionarioInput[] | EgresoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutFuncionarioInput | EgresoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: EgresoCreateManyFuncionarioInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type PersonaUpdateOneRequiredWithoutFuncionarioNestedInput = {
    create?: XOR<PersonaCreateWithoutFuncionarioInput, PersonaUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutFuncionarioInput
    upsert?: PersonaUpsertWithoutFuncionarioInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutFuncionarioInput, PersonaUpdateWithoutFuncionarioInput>, PersonaUncheckedUpdateWithoutFuncionarioInput>
  }

  export type EgresoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<EgresoCreateWithoutFuncionarioInput, EgresoUncheckedCreateWithoutFuncionarioInput> | EgresoCreateWithoutFuncionarioInput[] | EgresoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutFuncionarioInput | EgresoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutFuncionarioInput | EgresoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: EgresoCreateManyFuncionarioInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutFuncionarioInput | EgresoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutFuncionarioInput | EgresoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type EgresoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<EgresoCreateWithoutFuncionarioInput, EgresoUncheckedCreateWithoutFuncionarioInput> | EgresoCreateWithoutFuncionarioInput[] | EgresoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutFuncionarioInput | EgresoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutFuncionarioInput | EgresoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: EgresoCreateManyFuncionarioInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutFuncionarioInput | EgresoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutFuncionarioInput | EgresoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type PersonaCreateNestedOneWithoutProveedorInput = {
    create?: XOR<PersonaCreateWithoutProveedorInput, PersonaUncheckedCreateWithoutProveedorInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutProveedorInput
    connect?: PersonaWhereUniqueInput
  }

  export type EgresoCreateNestedManyWithoutProveedorInput = {
    create?: XOR<EgresoCreateWithoutProveedorInput, EgresoUncheckedCreateWithoutProveedorInput> | EgresoCreateWithoutProveedorInput[] | EgresoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutProveedorInput | EgresoCreateOrConnectWithoutProveedorInput[]
    createMany?: EgresoCreateManyProveedorInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type EgresoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<EgresoCreateWithoutProveedorInput, EgresoUncheckedCreateWithoutProveedorInput> | EgresoCreateWithoutProveedorInput[] | EgresoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutProveedorInput | EgresoCreateOrConnectWithoutProveedorInput[]
    createMany?: EgresoCreateManyProveedorInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type PersonaUpdateOneRequiredWithoutProveedorNestedInput = {
    create?: XOR<PersonaCreateWithoutProveedorInput, PersonaUncheckedCreateWithoutProveedorInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutProveedorInput
    upsert?: PersonaUpsertWithoutProveedorInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutProveedorInput, PersonaUpdateWithoutProveedorInput>, PersonaUncheckedUpdateWithoutProveedorInput>
  }

  export type EgresoUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<EgresoCreateWithoutProveedorInput, EgresoUncheckedCreateWithoutProveedorInput> | EgresoCreateWithoutProveedorInput[] | EgresoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutProveedorInput | EgresoCreateOrConnectWithoutProveedorInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutProveedorInput | EgresoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: EgresoCreateManyProveedorInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutProveedorInput | EgresoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutProveedorInput | EgresoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type EgresoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<EgresoCreateWithoutProveedorInput, EgresoUncheckedCreateWithoutProveedorInput> | EgresoCreateWithoutProveedorInput[] | EgresoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutProveedorInput | EgresoCreateOrConnectWithoutProveedorInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutProveedorInput | EgresoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: EgresoCreateManyProveedorInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutProveedorInput | EgresoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutProveedorInput | EgresoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type EgresoCreateNestedManyWithoutEntidadInput = {
    create?: XOR<EgresoCreateWithoutEntidadInput, EgresoUncheckedCreateWithoutEntidadInput> | EgresoCreateWithoutEntidadInput[] | EgresoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutEntidadInput | EgresoCreateOrConnectWithoutEntidadInput[]
    createMany?: EgresoCreateManyEntidadInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type LanzamientoCreateNestedManyWithoutEntidadInput = {
    create?: XOR<LanzamientoCreateWithoutEntidadInput, LanzamientoUncheckedCreateWithoutEntidadInput> | LanzamientoCreateWithoutEntidadInput[] | LanzamientoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEntidadInput | LanzamientoCreateOrConnectWithoutEntidadInput[]
    createMany?: LanzamientoCreateManyEntidadInputEnvelope
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
  }

  export type EgresoUncheckedCreateNestedManyWithoutEntidadInput = {
    create?: XOR<EgresoCreateWithoutEntidadInput, EgresoUncheckedCreateWithoutEntidadInput> | EgresoCreateWithoutEntidadInput[] | EgresoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutEntidadInput | EgresoCreateOrConnectWithoutEntidadInput[]
    createMany?: EgresoCreateManyEntidadInputEnvelope
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
  }

  export type LanzamientoUncheckedCreateNestedManyWithoutEntidadInput = {
    create?: XOR<LanzamientoCreateWithoutEntidadInput, LanzamientoUncheckedCreateWithoutEntidadInput> | LanzamientoCreateWithoutEntidadInput[] | LanzamientoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEntidadInput | LanzamientoCreateOrConnectWithoutEntidadInput[]
    createMany?: LanzamientoCreateManyEntidadInputEnvelope
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
  }

  export type EgresoUpdateManyWithoutEntidadNestedInput = {
    create?: XOR<EgresoCreateWithoutEntidadInput, EgresoUncheckedCreateWithoutEntidadInput> | EgresoCreateWithoutEntidadInput[] | EgresoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutEntidadInput | EgresoCreateOrConnectWithoutEntidadInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutEntidadInput | EgresoUpsertWithWhereUniqueWithoutEntidadInput[]
    createMany?: EgresoCreateManyEntidadInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutEntidadInput | EgresoUpdateWithWhereUniqueWithoutEntidadInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutEntidadInput | EgresoUpdateManyWithWhereWithoutEntidadInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type LanzamientoUpdateManyWithoutEntidadNestedInput = {
    create?: XOR<LanzamientoCreateWithoutEntidadInput, LanzamientoUncheckedCreateWithoutEntidadInput> | LanzamientoCreateWithoutEntidadInput[] | LanzamientoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEntidadInput | LanzamientoCreateOrConnectWithoutEntidadInput[]
    upsert?: LanzamientoUpsertWithWhereUniqueWithoutEntidadInput | LanzamientoUpsertWithWhereUniqueWithoutEntidadInput[]
    createMany?: LanzamientoCreateManyEntidadInputEnvelope
    set?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    disconnect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    delete?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    update?: LanzamientoUpdateWithWhereUniqueWithoutEntidadInput | LanzamientoUpdateWithWhereUniqueWithoutEntidadInput[]
    updateMany?: LanzamientoUpdateManyWithWhereWithoutEntidadInput | LanzamientoUpdateManyWithWhereWithoutEntidadInput[]
    deleteMany?: LanzamientoScalarWhereInput | LanzamientoScalarWhereInput[]
  }

  export type EgresoUncheckedUpdateManyWithoutEntidadNestedInput = {
    create?: XOR<EgresoCreateWithoutEntidadInput, EgresoUncheckedCreateWithoutEntidadInput> | EgresoCreateWithoutEntidadInput[] | EgresoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EgresoCreateOrConnectWithoutEntidadInput | EgresoCreateOrConnectWithoutEntidadInput[]
    upsert?: EgresoUpsertWithWhereUniqueWithoutEntidadInput | EgresoUpsertWithWhereUniqueWithoutEntidadInput[]
    createMany?: EgresoCreateManyEntidadInputEnvelope
    set?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    disconnect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    delete?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    connect?: EgresoWhereUniqueInput | EgresoWhereUniqueInput[]
    update?: EgresoUpdateWithWhereUniqueWithoutEntidadInput | EgresoUpdateWithWhereUniqueWithoutEntidadInput[]
    updateMany?: EgresoUpdateManyWithWhereWithoutEntidadInput | EgresoUpdateManyWithWhereWithoutEntidadInput[]
    deleteMany?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
  }

  export type LanzamientoUncheckedUpdateManyWithoutEntidadNestedInput = {
    create?: XOR<LanzamientoCreateWithoutEntidadInput, LanzamientoUncheckedCreateWithoutEntidadInput> | LanzamientoCreateWithoutEntidadInput[] | LanzamientoUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEntidadInput | LanzamientoCreateOrConnectWithoutEntidadInput[]
    upsert?: LanzamientoUpsertWithWhereUniqueWithoutEntidadInput | LanzamientoUpsertWithWhereUniqueWithoutEntidadInput[]
    createMany?: LanzamientoCreateManyEntidadInputEnvelope
    set?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    disconnect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    delete?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    update?: LanzamientoUpdateWithWhereUniqueWithoutEntidadInput | LanzamientoUpdateWithWhereUniqueWithoutEntidadInput[]
    updateMany?: LanzamientoUpdateManyWithWhereWithoutEntidadInput | LanzamientoUpdateManyWithWhereWithoutEntidadInput[]
    deleteMany?: LanzamientoScalarWhereInput | LanzamientoScalarWhereInput[]
  }

  export type ProveedorCreateNestedOneWithoutEgresosInput = {
    create?: XOR<ProveedorCreateWithoutEgresosInput, ProveedorUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutEgresosInput
    connect?: ProveedorWhereUniqueInput
  }

  export type FuncionarioCreateNestedOneWithoutEgresosInput = {
    create?: XOR<FuncionarioCreateWithoutEgresosInput, FuncionarioUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEgresosInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type PersonaCreateNestedOneWithoutEgresosInput = {
    create?: XOR<PersonaCreateWithoutEgresosInput, PersonaUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutEgresosInput
    connect?: PersonaWhereUniqueInput
  }

  export type EntidadCreateNestedOneWithoutEgresosInput = {
    create?: XOR<EntidadCreateWithoutEgresosInput, EntidadUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: EntidadCreateOrConnectWithoutEgresosInput
    connect?: EntidadWhereUniqueInput
  }

  export type LanzamientoCreateNestedManyWithoutEgresoInput = {
    create?: XOR<LanzamientoCreateWithoutEgresoInput, LanzamientoUncheckedCreateWithoutEgresoInput> | LanzamientoCreateWithoutEgresoInput[] | LanzamientoUncheckedCreateWithoutEgresoInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEgresoInput | LanzamientoCreateOrConnectWithoutEgresoInput[]
    createMany?: LanzamientoCreateManyEgresoInputEnvelope
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
  }

  export type LanzamientoUncheckedCreateNestedManyWithoutEgresoInput = {
    create?: XOR<LanzamientoCreateWithoutEgresoInput, LanzamientoUncheckedCreateWithoutEgresoInput> | LanzamientoCreateWithoutEgresoInput[] | LanzamientoUncheckedCreateWithoutEgresoInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEgresoInput | LanzamientoCreateOrConnectWithoutEgresoInput[]
    createMany?: LanzamientoCreateManyEgresoInputEnvelope
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
  }

  export type ProveedorUpdateOneWithoutEgresosNestedInput = {
    create?: XOR<ProveedorCreateWithoutEgresosInput, ProveedorUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutEgresosInput
    upsert?: ProveedorUpsertWithoutEgresosInput
    disconnect?: ProveedorWhereInput | boolean
    delete?: ProveedorWhereInput | boolean
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutEgresosInput, ProveedorUpdateWithoutEgresosInput>, ProveedorUncheckedUpdateWithoutEgresosInput>
  }

  export type FuncionarioUpdateOneWithoutEgresosNestedInput = {
    create?: XOR<FuncionarioCreateWithoutEgresosInput, FuncionarioUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEgresosInput
    upsert?: FuncionarioUpsertWithoutEgresosInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutEgresosInput, FuncionarioUpdateWithoutEgresosInput>, FuncionarioUncheckedUpdateWithoutEgresosInput>
  }

  export type PersonaUpdateOneWithoutEgresosNestedInput = {
    create?: XOR<PersonaCreateWithoutEgresosInput, PersonaUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutEgresosInput
    upsert?: PersonaUpsertWithoutEgresosInput
    disconnect?: PersonaWhereInput | boolean
    delete?: PersonaWhereInput | boolean
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutEgresosInput, PersonaUpdateWithoutEgresosInput>, PersonaUncheckedUpdateWithoutEgresosInput>
  }

  export type EntidadUpdateOneRequiredWithoutEgresosNestedInput = {
    create?: XOR<EntidadCreateWithoutEgresosInput, EntidadUncheckedCreateWithoutEgresosInput>
    connectOrCreate?: EntidadCreateOrConnectWithoutEgresosInput
    upsert?: EntidadUpsertWithoutEgresosInput
    connect?: EntidadWhereUniqueInput
    update?: XOR<XOR<EntidadUpdateToOneWithWhereWithoutEgresosInput, EntidadUpdateWithoutEgresosInput>, EntidadUncheckedUpdateWithoutEgresosInput>
  }

  export type LanzamientoUpdateManyWithoutEgresoNestedInput = {
    create?: XOR<LanzamientoCreateWithoutEgresoInput, LanzamientoUncheckedCreateWithoutEgresoInput> | LanzamientoCreateWithoutEgresoInput[] | LanzamientoUncheckedCreateWithoutEgresoInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEgresoInput | LanzamientoCreateOrConnectWithoutEgresoInput[]
    upsert?: LanzamientoUpsertWithWhereUniqueWithoutEgresoInput | LanzamientoUpsertWithWhereUniqueWithoutEgresoInput[]
    createMany?: LanzamientoCreateManyEgresoInputEnvelope
    set?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    disconnect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    delete?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    update?: LanzamientoUpdateWithWhereUniqueWithoutEgresoInput | LanzamientoUpdateWithWhereUniqueWithoutEgresoInput[]
    updateMany?: LanzamientoUpdateManyWithWhereWithoutEgresoInput | LanzamientoUpdateManyWithWhereWithoutEgresoInput[]
    deleteMany?: LanzamientoScalarWhereInput | LanzamientoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LanzamientoUncheckedUpdateManyWithoutEgresoNestedInput = {
    create?: XOR<LanzamientoCreateWithoutEgresoInput, LanzamientoUncheckedCreateWithoutEgresoInput> | LanzamientoCreateWithoutEgresoInput[] | LanzamientoUncheckedCreateWithoutEgresoInput[]
    connectOrCreate?: LanzamientoCreateOrConnectWithoutEgresoInput | LanzamientoCreateOrConnectWithoutEgresoInput[]
    upsert?: LanzamientoUpsertWithWhereUniqueWithoutEgresoInput | LanzamientoUpsertWithWhereUniqueWithoutEgresoInput[]
    createMany?: LanzamientoCreateManyEgresoInputEnvelope
    set?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    disconnect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    delete?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    connect?: LanzamientoWhereUniqueInput | LanzamientoWhereUniqueInput[]
    update?: LanzamientoUpdateWithWhereUniqueWithoutEgresoInput | LanzamientoUpdateWithWhereUniqueWithoutEgresoInput[]
    updateMany?: LanzamientoUpdateManyWithWhereWithoutEgresoInput | LanzamientoUpdateManyWithWhereWithoutEgresoInput[]
    deleteMany?: LanzamientoScalarWhereInput | LanzamientoScalarWhereInput[]
  }

  export type EgresoCreateNestedOneWithoutLanzamientosInput = {
    create?: XOR<EgresoCreateWithoutLanzamientosInput, EgresoUncheckedCreateWithoutLanzamientosInput>
    connectOrCreate?: EgresoCreateOrConnectWithoutLanzamientosInput
    connect?: EgresoWhereUniqueInput
  }

  export type EntidadCreateNestedOneWithoutLanzamientosInput = {
    create?: XOR<EntidadCreateWithoutLanzamientosInput, EntidadUncheckedCreateWithoutLanzamientosInput>
    connectOrCreate?: EntidadCreateOrConnectWithoutLanzamientosInput
    connect?: EntidadWhereUniqueInput
  }

  export type EgresoUpdateOneRequiredWithoutLanzamientosNestedInput = {
    create?: XOR<EgresoCreateWithoutLanzamientosInput, EgresoUncheckedCreateWithoutLanzamientosInput>
    connectOrCreate?: EgresoCreateOrConnectWithoutLanzamientosInput
    upsert?: EgresoUpsertWithoutLanzamientosInput
    connect?: EgresoWhereUniqueInput
    update?: XOR<XOR<EgresoUpdateToOneWithWhereWithoutLanzamientosInput, EgresoUpdateWithoutLanzamientosInput>, EgresoUncheckedUpdateWithoutLanzamientosInput>
  }

  export type EntidadUpdateOneRequiredWithoutLanzamientosNestedInput = {
    create?: XOR<EntidadCreateWithoutLanzamientosInput, EntidadUncheckedCreateWithoutLanzamientosInput>
    connectOrCreate?: EntidadCreateOrConnectWithoutLanzamientosInput
    upsert?: EntidadUpsertWithoutLanzamientosInput
    connect?: EntidadWhereUniqueInput
    update?: XOR<XOR<EntidadUpdateToOneWithWhereWithoutLanzamientosInput, EntidadUpdateWithoutLanzamientosInput>, EntidadUncheckedUpdateWithoutLanzamientosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FuncionarioCreateWithoutPersonaInput = {
    egresos?: EgresoCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutPersonaInput = {
    egresos?: EgresoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioCreateOrConnectWithoutPersonaInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutPersonaInput, FuncionarioUncheckedCreateWithoutPersonaInput>
  }

  export type ProveedorCreateWithoutPersonaInput = {
    egresos?: EgresoCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateWithoutPersonaInput = {
    egresos?: EgresoUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorCreateOrConnectWithoutPersonaInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutPersonaInput, ProveedorUncheckedCreateWithoutPersonaInput>
  }

  export type EgresoCreateWithoutPersonaInput = {
    proveedor?: ProveedorCreateNestedOneWithoutEgresosInput
    funcionario?: FuncionarioCreateNestedOneWithoutEgresosInput
    entidad: EntidadCreateNestedOneWithoutEgresosInput
    lanzamientos?: LanzamientoCreateNestedManyWithoutEgresoInput
  }

  export type EgresoUncheckedCreateWithoutPersonaInput = {
    id?: number
    entidadId: number
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEgresoInput
  }

  export type EgresoCreateOrConnectWithoutPersonaInput = {
    where: EgresoWhereUniqueInput
    create: XOR<EgresoCreateWithoutPersonaInput, EgresoUncheckedCreateWithoutPersonaInput>
  }

  export type EgresoCreateManyPersonaInputEnvelope = {
    data: EgresoCreateManyPersonaInput | EgresoCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioUpsertWithoutPersonaInput = {
    update: XOR<FuncionarioUpdateWithoutPersonaInput, FuncionarioUncheckedUpdateWithoutPersonaInput>
    create: XOR<FuncionarioCreateWithoutPersonaInput, FuncionarioUncheckedCreateWithoutPersonaInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutPersonaInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutPersonaInput, FuncionarioUncheckedUpdateWithoutPersonaInput>
  }

  export type FuncionarioUpdateWithoutPersonaInput = {
    egresos?: EgresoUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutPersonaInput = {
    egresos?: EgresoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type ProveedorUpsertWithoutPersonaInput = {
    update: XOR<ProveedorUpdateWithoutPersonaInput, ProveedorUncheckedUpdateWithoutPersonaInput>
    create: XOR<ProveedorCreateWithoutPersonaInput, ProveedorUncheckedCreateWithoutPersonaInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutPersonaInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutPersonaInput, ProveedorUncheckedUpdateWithoutPersonaInput>
  }

  export type ProveedorUpdateWithoutPersonaInput = {
    egresos?: EgresoUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateWithoutPersonaInput = {
    egresos?: EgresoUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type EgresoUpsertWithWhereUniqueWithoutPersonaInput = {
    where: EgresoWhereUniqueInput
    update: XOR<EgresoUpdateWithoutPersonaInput, EgresoUncheckedUpdateWithoutPersonaInput>
    create: XOR<EgresoCreateWithoutPersonaInput, EgresoUncheckedCreateWithoutPersonaInput>
  }

  export type EgresoUpdateWithWhereUniqueWithoutPersonaInput = {
    where: EgresoWhereUniqueInput
    data: XOR<EgresoUpdateWithoutPersonaInput, EgresoUncheckedUpdateWithoutPersonaInput>
  }

  export type EgresoUpdateManyWithWhereWithoutPersonaInput = {
    where: EgresoScalarWhereInput
    data: XOR<EgresoUpdateManyMutationInput, EgresoUncheckedUpdateManyWithoutPersonaInput>
  }

  export type EgresoScalarWhereInput = {
    AND?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
    OR?: EgresoScalarWhereInput[]
    NOT?: EgresoScalarWhereInput | EgresoScalarWhereInput[]
    id?: IntFilter<"Egreso"> | number
    personaId?: IntNullableFilter<"Egreso"> | number | null
    entidadId?: IntFilter<"Egreso"> | number
  }

  export type PersonaCreateWithoutFuncionarioInput = {
    nombre: string
    proveedor?: ProveedorCreateNestedOneWithoutPersonaInput
    egresos?: EgresoCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    nombre: string
    proveedor?: ProveedorUncheckedCreateNestedOneWithoutPersonaInput
    egresos?: EgresoUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutFuncionarioInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutFuncionarioInput, PersonaUncheckedCreateWithoutFuncionarioInput>
  }

  export type EgresoCreateWithoutFuncionarioInput = {
    proveedor?: ProveedorCreateNestedOneWithoutEgresosInput
    persona?: PersonaCreateNestedOneWithoutEgresosInput
    entidad: EntidadCreateNestedOneWithoutEgresosInput
    lanzamientos?: LanzamientoCreateNestedManyWithoutEgresoInput
  }

  export type EgresoUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    entidadId: number
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEgresoInput
  }

  export type EgresoCreateOrConnectWithoutFuncionarioInput = {
    where: EgresoWhereUniqueInput
    create: XOR<EgresoCreateWithoutFuncionarioInput, EgresoUncheckedCreateWithoutFuncionarioInput>
  }

  export type EgresoCreateManyFuncionarioInputEnvelope = {
    data: EgresoCreateManyFuncionarioInput | EgresoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type PersonaUpsertWithoutFuncionarioInput = {
    update: XOR<PersonaUpdateWithoutFuncionarioInput, PersonaUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<PersonaCreateWithoutFuncionarioInput, PersonaUncheckedCreateWithoutFuncionarioInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutFuncionarioInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutFuncionarioInput, PersonaUncheckedUpdateWithoutFuncionarioInput>
  }

  export type PersonaUpdateWithoutFuncionarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    proveedor?: ProveedorUpdateOneWithoutPersonaNestedInput
    egresos?: EgresoUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    proveedor?: ProveedorUncheckedUpdateOneWithoutPersonaNestedInput
    egresos?: EgresoUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type EgresoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: EgresoWhereUniqueInput
    update: XOR<EgresoUpdateWithoutFuncionarioInput, EgresoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<EgresoCreateWithoutFuncionarioInput, EgresoUncheckedCreateWithoutFuncionarioInput>
  }

  export type EgresoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: EgresoWhereUniqueInput
    data: XOR<EgresoUpdateWithoutFuncionarioInput, EgresoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type EgresoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: EgresoScalarWhereInput
    data: XOR<EgresoUpdateManyMutationInput, EgresoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type PersonaCreateWithoutProveedorInput = {
    nombre: string
    funcionario?: FuncionarioCreateNestedOneWithoutPersonaInput
    egresos?: EgresoCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutProveedorInput = {
    id?: number
    nombre: string
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutPersonaInput
    egresos?: EgresoUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutProveedorInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutProveedorInput, PersonaUncheckedCreateWithoutProveedorInput>
  }

  export type EgresoCreateWithoutProveedorInput = {
    funcionario?: FuncionarioCreateNestedOneWithoutEgresosInput
    persona?: PersonaCreateNestedOneWithoutEgresosInput
    entidad: EntidadCreateNestedOneWithoutEgresosInput
    lanzamientos?: LanzamientoCreateNestedManyWithoutEgresoInput
  }

  export type EgresoUncheckedCreateWithoutProveedorInput = {
    id?: number
    entidadId: number
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEgresoInput
  }

  export type EgresoCreateOrConnectWithoutProveedorInput = {
    where: EgresoWhereUniqueInput
    create: XOR<EgresoCreateWithoutProveedorInput, EgresoUncheckedCreateWithoutProveedorInput>
  }

  export type EgresoCreateManyProveedorInputEnvelope = {
    data: EgresoCreateManyProveedorInput | EgresoCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type PersonaUpsertWithoutProveedorInput = {
    update: XOR<PersonaUpdateWithoutProveedorInput, PersonaUncheckedUpdateWithoutProveedorInput>
    create: XOR<PersonaCreateWithoutProveedorInput, PersonaUncheckedCreateWithoutProveedorInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutProveedorInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutProveedorInput, PersonaUncheckedUpdateWithoutProveedorInput>
  }

  export type PersonaUpdateWithoutProveedorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    funcionario?: FuncionarioUpdateOneWithoutPersonaNestedInput
    egresos?: EgresoUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    funcionario?: FuncionarioUncheckedUpdateOneWithoutPersonaNestedInput
    egresos?: EgresoUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type EgresoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: EgresoWhereUniqueInput
    update: XOR<EgresoUpdateWithoutProveedorInput, EgresoUncheckedUpdateWithoutProveedorInput>
    create: XOR<EgresoCreateWithoutProveedorInput, EgresoUncheckedCreateWithoutProveedorInput>
  }

  export type EgresoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: EgresoWhereUniqueInput
    data: XOR<EgresoUpdateWithoutProveedorInput, EgresoUncheckedUpdateWithoutProveedorInput>
  }

  export type EgresoUpdateManyWithWhereWithoutProveedorInput = {
    where: EgresoScalarWhereInput
    data: XOR<EgresoUpdateManyMutationInput, EgresoUncheckedUpdateManyWithoutProveedorInput>
  }

  export type EgresoCreateWithoutEntidadInput = {
    proveedor?: ProveedorCreateNestedOneWithoutEgresosInput
    funcionario?: FuncionarioCreateNestedOneWithoutEgresosInput
    persona?: PersonaCreateNestedOneWithoutEgresosInput
    lanzamientos?: LanzamientoCreateNestedManyWithoutEgresoInput
  }

  export type EgresoUncheckedCreateWithoutEntidadInput = {
    id?: number
    personaId?: number | null
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEgresoInput
  }

  export type EgresoCreateOrConnectWithoutEntidadInput = {
    where: EgresoWhereUniqueInput
    create: XOR<EgresoCreateWithoutEntidadInput, EgresoUncheckedCreateWithoutEntidadInput>
  }

  export type EgresoCreateManyEntidadInputEnvelope = {
    data: EgresoCreateManyEntidadInput | EgresoCreateManyEntidadInput[]
    skipDuplicates?: boolean
  }

  export type LanzamientoCreateWithoutEntidadInput = {
    egreso: EgresoCreateNestedOneWithoutLanzamientosInput
  }

  export type LanzamientoUncheckedCreateWithoutEntidadInput = {
    id?: number
    egresoId: number
  }

  export type LanzamientoCreateOrConnectWithoutEntidadInput = {
    where: LanzamientoWhereUniqueInput
    create: XOR<LanzamientoCreateWithoutEntidadInput, LanzamientoUncheckedCreateWithoutEntidadInput>
  }

  export type LanzamientoCreateManyEntidadInputEnvelope = {
    data: LanzamientoCreateManyEntidadInput | LanzamientoCreateManyEntidadInput[]
    skipDuplicates?: boolean
  }

  export type EgresoUpsertWithWhereUniqueWithoutEntidadInput = {
    where: EgresoWhereUniqueInput
    update: XOR<EgresoUpdateWithoutEntidadInput, EgresoUncheckedUpdateWithoutEntidadInput>
    create: XOR<EgresoCreateWithoutEntidadInput, EgresoUncheckedCreateWithoutEntidadInput>
  }

  export type EgresoUpdateWithWhereUniqueWithoutEntidadInput = {
    where: EgresoWhereUniqueInput
    data: XOR<EgresoUpdateWithoutEntidadInput, EgresoUncheckedUpdateWithoutEntidadInput>
  }

  export type EgresoUpdateManyWithWhereWithoutEntidadInput = {
    where: EgresoScalarWhereInput
    data: XOR<EgresoUpdateManyMutationInput, EgresoUncheckedUpdateManyWithoutEntidadInput>
  }

  export type LanzamientoUpsertWithWhereUniqueWithoutEntidadInput = {
    where: LanzamientoWhereUniqueInput
    update: XOR<LanzamientoUpdateWithoutEntidadInput, LanzamientoUncheckedUpdateWithoutEntidadInput>
    create: XOR<LanzamientoCreateWithoutEntidadInput, LanzamientoUncheckedCreateWithoutEntidadInput>
  }

  export type LanzamientoUpdateWithWhereUniqueWithoutEntidadInput = {
    where: LanzamientoWhereUniqueInput
    data: XOR<LanzamientoUpdateWithoutEntidadInput, LanzamientoUncheckedUpdateWithoutEntidadInput>
  }

  export type LanzamientoUpdateManyWithWhereWithoutEntidadInput = {
    where: LanzamientoScalarWhereInput
    data: XOR<LanzamientoUpdateManyMutationInput, LanzamientoUncheckedUpdateManyWithoutEntidadInput>
  }

  export type LanzamientoScalarWhereInput = {
    AND?: LanzamientoScalarWhereInput | LanzamientoScalarWhereInput[]
    OR?: LanzamientoScalarWhereInput[]
    NOT?: LanzamientoScalarWhereInput | LanzamientoScalarWhereInput[]
    id?: IntFilter<"Lanzamiento"> | number
    egresoId?: IntFilter<"Lanzamiento"> | number
    entidadId?: IntFilter<"Lanzamiento"> | number
  }

  export type ProveedorCreateWithoutEgresosInput = {
    persona: PersonaCreateNestedOneWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateWithoutEgresosInput = {
    id: number
  }

  export type ProveedorCreateOrConnectWithoutEgresosInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutEgresosInput, ProveedorUncheckedCreateWithoutEgresosInput>
  }

  export type FuncionarioCreateWithoutEgresosInput = {
    persona: PersonaCreateNestedOneWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutEgresosInput = {
    id: number
  }

  export type FuncionarioCreateOrConnectWithoutEgresosInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutEgresosInput, FuncionarioUncheckedCreateWithoutEgresosInput>
  }

  export type PersonaCreateWithoutEgresosInput = {
    nombre: string
    funcionario?: FuncionarioCreateNestedOneWithoutPersonaInput
    proveedor?: ProveedorCreateNestedOneWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutEgresosInput = {
    id?: number
    nombre: string
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutPersonaInput
    proveedor?: ProveedorUncheckedCreateNestedOneWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutEgresosInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutEgresosInput, PersonaUncheckedCreateWithoutEgresosInput>
  }

  export type EntidadCreateWithoutEgresosInput = {
    nombre: string
    lanzamientos?: LanzamientoCreateNestedManyWithoutEntidadInput
  }

  export type EntidadUncheckedCreateWithoutEgresosInput = {
    id?: number
    nombre: string
    lanzamientos?: LanzamientoUncheckedCreateNestedManyWithoutEntidadInput
  }

  export type EntidadCreateOrConnectWithoutEgresosInput = {
    where: EntidadWhereUniqueInput
    create: XOR<EntidadCreateWithoutEgresosInput, EntidadUncheckedCreateWithoutEgresosInput>
  }

  export type LanzamientoCreateWithoutEgresoInput = {
    entidad: EntidadCreateNestedOneWithoutLanzamientosInput
  }

  export type LanzamientoUncheckedCreateWithoutEgresoInput = {
    id?: number
    entidadId: number
  }

  export type LanzamientoCreateOrConnectWithoutEgresoInput = {
    where: LanzamientoWhereUniqueInput
    create: XOR<LanzamientoCreateWithoutEgresoInput, LanzamientoUncheckedCreateWithoutEgresoInput>
  }

  export type LanzamientoCreateManyEgresoInputEnvelope = {
    data: LanzamientoCreateManyEgresoInput | LanzamientoCreateManyEgresoInput[]
    skipDuplicates?: boolean
  }

  export type ProveedorUpsertWithoutEgresosInput = {
    update: XOR<ProveedorUpdateWithoutEgresosInput, ProveedorUncheckedUpdateWithoutEgresosInput>
    create: XOR<ProveedorCreateWithoutEgresosInput, ProveedorUncheckedCreateWithoutEgresosInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutEgresosInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutEgresosInput, ProveedorUncheckedUpdateWithoutEgresosInput>
  }

  export type ProveedorUpdateWithoutEgresosInput = {
    persona?: PersonaUpdateOneRequiredWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateWithoutEgresosInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionarioUpsertWithoutEgresosInput = {
    update: XOR<FuncionarioUpdateWithoutEgresosInput, FuncionarioUncheckedUpdateWithoutEgresosInput>
    create: XOR<FuncionarioCreateWithoutEgresosInput, FuncionarioUncheckedCreateWithoutEgresosInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutEgresosInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutEgresosInput, FuncionarioUncheckedUpdateWithoutEgresosInput>
  }

  export type FuncionarioUpdateWithoutEgresosInput = {
    persona?: PersonaUpdateOneRequiredWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutEgresosInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type PersonaUpsertWithoutEgresosInput = {
    update: XOR<PersonaUpdateWithoutEgresosInput, PersonaUncheckedUpdateWithoutEgresosInput>
    create: XOR<PersonaCreateWithoutEgresosInput, PersonaUncheckedCreateWithoutEgresosInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutEgresosInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutEgresosInput, PersonaUncheckedUpdateWithoutEgresosInput>
  }

  export type PersonaUpdateWithoutEgresosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    funcionario?: FuncionarioUpdateOneWithoutPersonaNestedInput
    proveedor?: ProveedorUpdateOneWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutEgresosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    funcionario?: FuncionarioUncheckedUpdateOneWithoutPersonaNestedInput
    proveedor?: ProveedorUncheckedUpdateOneWithoutPersonaNestedInput
  }

  export type EntidadUpsertWithoutEgresosInput = {
    update: XOR<EntidadUpdateWithoutEgresosInput, EntidadUncheckedUpdateWithoutEgresosInput>
    create: XOR<EntidadCreateWithoutEgresosInput, EntidadUncheckedCreateWithoutEgresosInput>
    where?: EntidadWhereInput
  }

  export type EntidadUpdateToOneWithWhereWithoutEgresosInput = {
    where?: EntidadWhereInput
    data: XOR<EntidadUpdateWithoutEgresosInput, EntidadUncheckedUpdateWithoutEgresosInput>
  }

  export type EntidadUpdateWithoutEgresosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    lanzamientos?: LanzamientoUpdateManyWithoutEntidadNestedInput
  }

  export type EntidadUncheckedUpdateWithoutEgresosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEntidadNestedInput
  }

  export type LanzamientoUpsertWithWhereUniqueWithoutEgresoInput = {
    where: LanzamientoWhereUniqueInput
    update: XOR<LanzamientoUpdateWithoutEgresoInput, LanzamientoUncheckedUpdateWithoutEgresoInput>
    create: XOR<LanzamientoCreateWithoutEgresoInput, LanzamientoUncheckedCreateWithoutEgresoInput>
  }

  export type LanzamientoUpdateWithWhereUniqueWithoutEgresoInput = {
    where: LanzamientoWhereUniqueInput
    data: XOR<LanzamientoUpdateWithoutEgresoInput, LanzamientoUncheckedUpdateWithoutEgresoInput>
  }

  export type LanzamientoUpdateManyWithWhereWithoutEgresoInput = {
    where: LanzamientoScalarWhereInput
    data: XOR<LanzamientoUpdateManyMutationInput, LanzamientoUncheckedUpdateManyWithoutEgresoInput>
  }

  export type EgresoCreateWithoutLanzamientosInput = {
    proveedor?: ProveedorCreateNestedOneWithoutEgresosInput
    funcionario?: FuncionarioCreateNestedOneWithoutEgresosInput
    persona?: PersonaCreateNestedOneWithoutEgresosInput
    entidad: EntidadCreateNestedOneWithoutEgresosInput
  }

  export type EgresoUncheckedCreateWithoutLanzamientosInput = {
    id?: number
    personaId?: number | null
    entidadId: number
  }

  export type EgresoCreateOrConnectWithoutLanzamientosInput = {
    where: EgresoWhereUniqueInput
    create: XOR<EgresoCreateWithoutLanzamientosInput, EgresoUncheckedCreateWithoutLanzamientosInput>
  }

  export type EntidadCreateWithoutLanzamientosInput = {
    nombre: string
    egresos?: EgresoCreateNestedManyWithoutEntidadInput
  }

  export type EntidadUncheckedCreateWithoutLanzamientosInput = {
    id?: number
    nombre: string
    egresos?: EgresoUncheckedCreateNestedManyWithoutEntidadInput
  }

  export type EntidadCreateOrConnectWithoutLanzamientosInput = {
    where: EntidadWhereUniqueInput
    create: XOR<EntidadCreateWithoutLanzamientosInput, EntidadUncheckedCreateWithoutLanzamientosInput>
  }

  export type EgresoUpsertWithoutLanzamientosInput = {
    update: XOR<EgresoUpdateWithoutLanzamientosInput, EgresoUncheckedUpdateWithoutLanzamientosInput>
    create: XOR<EgresoCreateWithoutLanzamientosInput, EgresoUncheckedCreateWithoutLanzamientosInput>
    where?: EgresoWhereInput
  }

  export type EgresoUpdateToOneWithWhereWithoutLanzamientosInput = {
    where?: EgresoWhereInput
    data: XOR<EgresoUpdateWithoutLanzamientosInput, EgresoUncheckedUpdateWithoutLanzamientosInput>
  }

  export type EgresoUpdateWithoutLanzamientosInput = {
    proveedor?: ProveedorUpdateOneWithoutEgresosNestedInput
    funcionario?: FuncionarioUpdateOneWithoutEgresosNestedInput
    persona?: PersonaUpdateOneWithoutEgresosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutEgresosNestedInput
  }

  export type EgresoUncheckedUpdateWithoutLanzamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    personaId?: NullableIntFieldUpdateOperationsInput | number | null
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EntidadUpsertWithoutLanzamientosInput = {
    update: XOR<EntidadUpdateWithoutLanzamientosInput, EntidadUncheckedUpdateWithoutLanzamientosInput>
    create: XOR<EntidadCreateWithoutLanzamientosInput, EntidadUncheckedCreateWithoutLanzamientosInput>
    where?: EntidadWhereInput
  }

  export type EntidadUpdateToOneWithWhereWithoutLanzamientosInput = {
    where?: EntidadWhereInput
    data: XOR<EntidadUpdateWithoutLanzamientosInput, EntidadUncheckedUpdateWithoutLanzamientosInput>
  }

  export type EntidadUpdateWithoutLanzamientosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    egresos?: EgresoUpdateManyWithoutEntidadNestedInput
  }

  export type EntidadUncheckedUpdateWithoutLanzamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    egresos?: EgresoUncheckedUpdateManyWithoutEntidadNestedInput
  }

  export type EgresoCreateManyPersonaInput = {
    id?: number
    entidadId: number
  }

  export type EgresoUpdateWithoutPersonaInput = {
    proveedor?: ProveedorUpdateOneWithoutEgresosNestedInput
    funcionario?: FuncionarioUpdateOneWithoutEgresosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutEgresosNestedInput
    lanzamientos?: LanzamientoUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateManyWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EgresoCreateManyFuncionarioInput = {
    id?: number
    entidadId: number
  }

  export type EgresoUpdateWithoutFuncionarioInput = {
    proveedor?: ProveedorUpdateOneWithoutEgresosNestedInput
    persona?: PersonaUpdateOneWithoutEgresosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutEgresosNestedInput
    lanzamientos?: LanzamientoUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EgresoCreateManyProveedorInput = {
    id?: number
    entidadId: number
  }

  export type EgresoUpdateWithoutProveedorInput = {
    funcionario?: FuncionarioUpdateOneWithoutEgresosNestedInput
    persona?: PersonaUpdateOneWithoutEgresosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutEgresosNestedInput
    lanzamientos?: LanzamientoUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateManyWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EgresoCreateManyEntidadInput = {
    id?: number
    personaId?: number | null
  }

  export type LanzamientoCreateManyEntidadInput = {
    id?: number
    egresoId: number
  }

  export type EgresoUpdateWithoutEntidadInput = {
    proveedor?: ProveedorUpdateOneWithoutEgresosNestedInput
    funcionario?: FuncionarioUpdateOneWithoutEgresosNestedInput
    persona?: PersonaUpdateOneWithoutEgresosNestedInput
    lanzamientos?: LanzamientoUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateWithoutEntidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    personaId?: NullableIntFieldUpdateOperationsInput | number | null
    lanzamientos?: LanzamientoUncheckedUpdateManyWithoutEgresoNestedInput
  }

  export type EgresoUncheckedUpdateManyWithoutEntidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    personaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LanzamientoUpdateWithoutEntidadInput = {
    egreso?: EgresoUpdateOneRequiredWithoutLanzamientosNestedInput
  }

  export type LanzamientoUncheckedUpdateWithoutEntidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    egresoId?: IntFieldUpdateOperationsInput | number
  }

  export type LanzamientoUncheckedUpdateManyWithoutEntidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    egresoId?: IntFieldUpdateOperationsInput | number
  }

  export type LanzamientoCreateManyEgresoInput = {
    id?: number
    entidadId: number
  }

  export type LanzamientoUpdateWithoutEgresoInput = {
    entidad?: EntidadUpdateOneRequiredWithoutLanzamientosNestedInput
  }

  export type LanzamientoUncheckedUpdateWithoutEgresoInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type LanzamientoUncheckedUpdateManyWithoutEgresoInput = {
    id?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}