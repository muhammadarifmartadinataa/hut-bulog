
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
 * Model Kupon
 * 
 */
export type Kupon = $Result.DefaultSelection<Prisma.$KuponPayload>
/**
 * Model Hadiah
 * 
 */
export type Hadiah = $Result.DefaultSelection<Prisma.$HadiahPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kupons
 * const kupons = await prisma.kupon.findMany()
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
   * // Fetch zero or more Kupons
   * const kupons = await prisma.kupon.findMany()
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
   * `prisma.kupon`: Exposes CRUD operations for the **Kupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kupons
    * const kupons = await prisma.kupon.findMany()
    * ```
    */
  get kupon(): Prisma.KuponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hadiah`: Exposes CRUD operations for the **Hadiah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hadiahs
    * const hadiahs = await prisma.hadiah.findMany()
    * ```
    */
  get hadiah(): Prisma.HadiahDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Kupon: 'Kupon',
    Hadiah: 'Hadiah'
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
      modelProps: "kupon" | "hadiah"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Kupon: {
        payload: Prisma.$KuponPayload<ExtArgs>
        fields: Prisma.KuponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KuponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KuponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>
          }
          findFirst: {
            args: Prisma.KuponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KuponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>
          }
          findMany: {
            args: Prisma.KuponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>[]
          }
          create: {
            args: Prisma.KuponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>
          }
          createMany: {
            args: Prisma.KuponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KuponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>
          }
          update: {
            args: Prisma.KuponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>
          }
          deleteMany: {
            args: Prisma.KuponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KuponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KuponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuponPayload>
          }
          aggregate: {
            args: Prisma.KuponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKupon>
          }
          groupBy: {
            args: Prisma.KuponGroupByArgs<ExtArgs>
            result: $Utils.Optional<KuponGroupByOutputType>[]
          }
          count: {
            args: Prisma.KuponCountArgs<ExtArgs>
            result: $Utils.Optional<KuponCountAggregateOutputType> | number
          }
        }
      }
      Hadiah: {
        payload: Prisma.$HadiahPayload<ExtArgs>
        fields: Prisma.HadiahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HadiahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HadiahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>
          }
          findFirst: {
            args: Prisma.HadiahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HadiahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>
          }
          findMany: {
            args: Prisma.HadiahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>[]
          }
          create: {
            args: Prisma.HadiahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>
          }
          createMany: {
            args: Prisma.HadiahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HadiahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>
          }
          update: {
            args: Prisma.HadiahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>
          }
          deleteMany: {
            args: Prisma.HadiahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HadiahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HadiahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HadiahPayload>
          }
          aggregate: {
            args: Prisma.HadiahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHadiah>
          }
          groupBy: {
            args: Prisma.HadiahGroupByArgs<ExtArgs>
            result: $Utils.Optional<HadiahGroupByOutputType>[]
          }
          count: {
            args: Prisma.HadiahCountArgs<ExtArgs>
            result: $Utils.Optional<HadiahCountAggregateOutputType> | number
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
    kupon?: KuponOmit
    hadiah?: HadiahOmit
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
   * Models
   */

  /**
   * Model Kupon
   */

  export type AggregateKupon = {
    _count: KuponCountAggregateOutputType | null
    _min: KuponMinAggregateOutputType | null
    _max: KuponMaxAggregateOutputType | null
  }

  export type KuponMinAggregateOutputType = {
    id_kupon: string | null
    nama: string | null
    jabatan: string | null
    unit_kerja: string | null
    kehadiran: boolean | null
  }

  export type KuponMaxAggregateOutputType = {
    id_kupon: string | null
    nama: string | null
    jabatan: string | null
    unit_kerja: string | null
    kehadiran: boolean | null
  }

  export type KuponCountAggregateOutputType = {
    id_kupon: number
    nama: number
    jabatan: number
    unit_kerja: number
    kehadiran: number
    _all: number
  }


  export type KuponMinAggregateInputType = {
    id_kupon?: true
    nama?: true
    jabatan?: true
    unit_kerja?: true
    kehadiran?: true
  }

  export type KuponMaxAggregateInputType = {
    id_kupon?: true
    nama?: true
    jabatan?: true
    unit_kerja?: true
    kehadiran?: true
  }

  export type KuponCountAggregateInputType = {
    id_kupon?: true
    nama?: true
    jabatan?: true
    unit_kerja?: true
    kehadiran?: true
    _all?: true
  }

  export type KuponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kupon to aggregate.
     */
    where?: KuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kupons to fetch.
     */
    orderBy?: KuponOrderByWithRelationInput | KuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kupons
    **/
    _count?: true | KuponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KuponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KuponMaxAggregateInputType
  }

  export type GetKuponAggregateType<T extends KuponAggregateArgs> = {
        [P in keyof T & keyof AggregateKupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKupon[P]>
      : GetScalarType<T[P], AggregateKupon[P]>
  }




  export type KuponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KuponWhereInput
    orderBy?: KuponOrderByWithAggregationInput | KuponOrderByWithAggregationInput[]
    by: KuponScalarFieldEnum[] | KuponScalarFieldEnum
    having?: KuponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KuponCountAggregateInputType | true
    _min?: KuponMinAggregateInputType
    _max?: KuponMaxAggregateInputType
  }

  export type KuponGroupByOutputType = {
    id_kupon: string
    nama: string
    jabatan: string
    unit_kerja: string
    kehadiran: boolean
    _count: KuponCountAggregateOutputType | null
    _min: KuponMinAggregateOutputType | null
    _max: KuponMaxAggregateOutputType | null
  }

  type GetKuponGroupByPayload<T extends KuponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KuponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KuponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KuponGroupByOutputType[P]>
            : GetScalarType<T[P], KuponGroupByOutputType[P]>
        }
      >
    >


  export type KuponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kupon?: boolean
    nama?: boolean
    jabatan?: boolean
    unit_kerja?: boolean
    kehadiran?: boolean
    hadiah?: boolean | Kupon$hadiahArgs<ExtArgs>
  }, ExtArgs["result"]["kupon"]>



  export type KuponSelectScalar = {
    id_kupon?: boolean
    nama?: boolean
    jabatan?: boolean
    unit_kerja?: boolean
    kehadiran?: boolean
  }

  export type KuponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kupon" | "nama" | "jabatan" | "unit_kerja" | "kehadiran", ExtArgs["result"]["kupon"]>
  export type KuponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hadiah?: boolean | Kupon$hadiahArgs<ExtArgs>
  }

  export type $KuponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kupon"
    objects: {
      hadiah: Prisma.$HadiahPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kupon: string
      nama: string
      jabatan: string
      unit_kerja: string
      kehadiran: boolean
    }, ExtArgs["result"]["kupon"]>
    composites: {}
  }

  type KuponGetPayload<S extends boolean | null | undefined | KuponDefaultArgs> = $Result.GetResult<Prisma.$KuponPayload, S>

  type KuponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KuponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KuponCountAggregateInputType | true
    }

  export interface KuponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kupon'], meta: { name: 'Kupon' } }
    /**
     * Find zero or one Kupon that matches the filter.
     * @param {KuponFindUniqueArgs} args - Arguments to find a Kupon
     * @example
     * // Get one Kupon
     * const kupon = await prisma.kupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KuponFindUniqueArgs>(args: SelectSubset<T, KuponFindUniqueArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KuponFindUniqueOrThrowArgs} args - Arguments to find a Kupon
     * @example
     * // Get one Kupon
     * const kupon = await prisma.kupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KuponFindUniqueOrThrowArgs>(args: SelectSubset<T, KuponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponFindFirstArgs} args - Arguments to find a Kupon
     * @example
     * // Get one Kupon
     * const kupon = await prisma.kupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KuponFindFirstArgs>(args?: SelectSubset<T, KuponFindFirstArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponFindFirstOrThrowArgs} args - Arguments to find a Kupon
     * @example
     * // Get one Kupon
     * const kupon = await prisma.kupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KuponFindFirstOrThrowArgs>(args?: SelectSubset<T, KuponFindFirstOrThrowArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kupons
     * const kupons = await prisma.kupon.findMany()
     * 
     * // Get first 10 Kupons
     * const kupons = await prisma.kupon.findMany({ take: 10 })
     * 
     * // Only select the `id_kupon`
     * const kuponWithId_kuponOnly = await prisma.kupon.findMany({ select: { id_kupon: true } })
     * 
     */
    findMany<T extends KuponFindManyArgs>(args?: SelectSubset<T, KuponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kupon.
     * @param {KuponCreateArgs} args - Arguments to create a Kupon.
     * @example
     * // Create one Kupon
     * const Kupon = await prisma.kupon.create({
     *   data: {
     *     // ... data to create a Kupon
     *   }
     * })
     * 
     */
    create<T extends KuponCreateArgs>(args: SelectSubset<T, KuponCreateArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kupons.
     * @param {KuponCreateManyArgs} args - Arguments to create many Kupons.
     * @example
     * // Create many Kupons
     * const kupon = await prisma.kupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KuponCreateManyArgs>(args?: SelectSubset<T, KuponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kupon.
     * @param {KuponDeleteArgs} args - Arguments to delete one Kupon.
     * @example
     * // Delete one Kupon
     * const Kupon = await prisma.kupon.delete({
     *   where: {
     *     // ... filter to delete one Kupon
     *   }
     * })
     * 
     */
    delete<T extends KuponDeleteArgs>(args: SelectSubset<T, KuponDeleteArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kupon.
     * @param {KuponUpdateArgs} args - Arguments to update one Kupon.
     * @example
     * // Update one Kupon
     * const kupon = await prisma.kupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KuponUpdateArgs>(args: SelectSubset<T, KuponUpdateArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kupons.
     * @param {KuponDeleteManyArgs} args - Arguments to filter Kupons to delete.
     * @example
     * // Delete a few Kupons
     * const { count } = await prisma.kupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KuponDeleteManyArgs>(args?: SelectSubset<T, KuponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kupons
     * const kupon = await prisma.kupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KuponUpdateManyArgs>(args: SelectSubset<T, KuponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kupon.
     * @param {KuponUpsertArgs} args - Arguments to update or create a Kupon.
     * @example
     * // Update or create a Kupon
     * const kupon = await prisma.kupon.upsert({
     *   create: {
     *     // ... data to create a Kupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kupon we want to update
     *   }
     * })
     */
    upsert<T extends KuponUpsertArgs>(args: SelectSubset<T, KuponUpsertArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponCountArgs} args - Arguments to filter Kupons to count.
     * @example
     * // Count the number of Kupons
     * const count = await prisma.kupon.count({
     *   where: {
     *     // ... the filter for the Kupons we want to count
     *   }
     * })
    **/
    count<T extends KuponCountArgs>(
      args?: Subset<T, KuponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KuponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KuponAggregateArgs>(args: Subset<T, KuponAggregateArgs>): Prisma.PrismaPromise<GetKuponAggregateType<T>>

    /**
     * Group by Kupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuponGroupByArgs} args - Group by arguments.
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
      T extends KuponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KuponGroupByArgs['orderBy'] }
        : { orderBy?: KuponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KuponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKuponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kupon model
   */
  readonly fields: KuponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KuponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hadiah<T extends Kupon$hadiahArgs<ExtArgs> = {}>(args?: Subset<T, Kupon$hadiahArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Kupon model
   */
  interface KuponFieldRefs {
    readonly id_kupon: FieldRef<"Kupon", 'String'>
    readonly nama: FieldRef<"Kupon", 'String'>
    readonly jabatan: FieldRef<"Kupon", 'String'>
    readonly unit_kerja: FieldRef<"Kupon", 'String'>
    readonly kehadiran: FieldRef<"Kupon", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Kupon findUnique
   */
  export type KuponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * Filter, which Kupon to fetch.
     */
    where: KuponWhereUniqueInput
  }

  /**
   * Kupon findUniqueOrThrow
   */
  export type KuponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * Filter, which Kupon to fetch.
     */
    where: KuponWhereUniqueInput
  }

  /**
   * Kupon findFirst
   */
  export type KuponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * Filter, which Kupon to fetch.
     */
    where?: KuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kupons to fetch.
     */
    orderBy?: KuponOrderByWithRelationInput | KuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kupons.
     */
    cursor?: KuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kupons.
     */
    distinct?: KuponScalarFieldEnum | KuponScalarFieldEnum[]
  }

  /**
   * Kupon findFirstOrThrow
   */
  export type KuponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * Filter, which Kupon to fetch.
     */
    where?: KuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kupons to fetch.
     */
    orderBy?: KuponOrderByWithRelationInput | KuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kupons.
     */
    cursor?: KuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kupons.
     */
    distinct?: KuponScalarFieldEnum | KuponScalarFieldEnum[]
  }

  /**
   * Kupon findMany
   */
  export type KuponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * Filter, which Kupons to fetch.
     */
    where?: KuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kupons to fetch.
     */
    orderBy?: KuponOrderByWithRelationInput | KuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kupons.
     */
    cursor?: KuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kupons.
     */
    skip?: number
    distinct?: KuponScalarFieldEnum | KuponScalarFieldEnum[]
  }

  /**
   * Kupon create
   */
  export type KuponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * The data needed to create a Kupon.
     */
    data: XOR<KuponCreateInput, KuponUncheckedCreateInput>
  }

  /**
   * Kupon createMany
   */
  export type KuponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kupons.
     */
    data: KuponCreateManyInput | KuponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kupon update
   */
  export type KuponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * The data needed to update a Kupon.
     */
    data: XOR<KuponUpdateInput, KuponUncheckedUpdateInput>
    /**
     * Choose, which Kupon to update.
     */
    where: KuponWhereUniqueInput
  }

  /**
   * Kupon updateMany
   */
  export type KuponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kupons.
     */
    data: XOR<KuponUpdateManyMutationInput, KuponUncheckedUpdateManyInput>
    /**
     * Filter which Kupons to update
     */
    where?: KuponWhereInput
    /**
     * Limit how many Kupons to update.
     */
    limit?: number
  }

  /**
   * Kupon upsert
   */
  export type KuponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * The filter to search for the Kupon to update in case it exists.
     */
    where: KuponWhereUniqueInput
    /**
     * In case the Kupon found by the `where` argument doesn't exist, create a new Kupon with this data.
     */
    create: XOR<KuponCreateInput, KuponUncheckedCreateInput>
    /**
     * In case the Kupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KuponUpdateInput, KuponUncheckedUpdateInput>
  }

  /**
   * Kupon delete
   */
  export type KuponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
    /**
     * Filter which Kupon to delete.
     */
    where: KuponWhereUniqueInput
  }

  /**
   * Kupon deleteMany
   */
  export type KuponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kupons to delete
     */
    where?: KuponWhereInput
    /**
     * Limit how many Kupons to delete.
     */
    limit?: number
  }

  /**
   * Kupon.hadiah
   */
  export type Kupon$hadiahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    where?: HadiahWhereInput
  }

  /**
   * Kupon without action
   */
  export type KuponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kupon
     */
    select?: KuponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kupon
     */
    omit?: KuponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuponInclude<ExtArgs> | null
  }


  /**
   * Model Hadiah
   */

  export type AggregateHadiah = {
    _count: HadiahCountAggregateOutputType | null
    _avg: HadiahAvgAggregateOutputType | null
    _sum: HadiahSumAggregateOutputType | null
    _min: HadiahMinAggregateOutputType | null
    _max: HadiahMaxAggregateOutputType | null
  }

  export type HadiahAvgAggregateOutputType = {
    id: number | null
  }

  export type HadiahSumAggregateOutputType = {
    id: number | null
  }

  export type HadiahMinAggregateOutputType = {
    id: number | null
    id_kupon: string | null
    nama: string | null
    hadiah: string | null
  }

  export type HadiahMaxAggregateOutputType = {
    id: number | null
    id_kupon: string | null
    nama: string | null
    hadiah: string | null
  }

  export type HadiahCountAggregateOutputType = {
    id: number
    id_kupon: number
    nama: number
    hadiah: number
    _all: number
  }


  export type HadiahAvgAggregateInputType = {
    id?: true
  }

  export type HadiahSumAggregateInputType = {
    id?: true
  }

  export type HadiahMinAggregateInputType = {
    id?: true
    id_kupon?: true
    nama?: true
    hadiah?: true
  }

  export type HadiahMaxAggregateInputType = {
    id?: true
    id_kupon?: true
    nama?: true
    hadiah?: true
  }

  export type HadiahCountAggregateInputType = {
    id?: true
    id_kupon?: true
    nama?: true
    hadiah?: true
    _all?: true
  }

  export type HadiahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hadiah to aggregate.
     */
    where?: HadiahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadiahs to fetch.
     */
    orderBy?: HadiahOrderByWithRelationInput | HadiahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HadiahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadiahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadiahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hadiahs
    **/
    _count?: true | HadiahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HadiahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HadiahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HadiahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HadiahMaxAggregateInputType
  }

  export type GetHadiahAggregateType<T extends HadiahAggregateArgs> = {
        [P in keyof T & keyof AggregateHadiah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHadiah[P]>
      : GetScalarType<T[P], AggregateHadiah[P]>
  }




  export type HadiahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HadiahWhereInput
    orderBy?: HadiahOrderByWithAggregationInput | HadiahOrderByWithAggregationInput[]
    by: HadiahScalarFieldEnum[] | HadiahScalarFieldEnum
    having?: HadiahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HadiahCountAggregateInputType | true
    _avg?: HadiahAvgAggregateInputType
    _sum?: HadiahSumAggregateInputType
    _min?: HadiahMinAggregateInputType
    _max?: HadiahMaxAggregateInputType
  }

  export type HadiahGroupByOutputType = {
    id: number
    id_kupon: string
    nama: string
    hadiah: string
    _count: HadiahCountAggregateOutputType | null
    _avg: HadiahAvgAggregateOutputType | null
    _sum: HadiahSumAggregateOutputType | null
    _min: HadiahMinAggregateOutputType | null
    _max: HadiahMaxAggregateOutputType | null
  }

  type GetHadiahGroupByPayload<T extends HadiahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HadiahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HadiahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HadiahGroupByOutputType[P]>
            : GetScalarType<T[P], HadiahGroupByOutputType[P]>
        }
      >
    >


  export type HadiahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kupon?: boolean
    nama?: boolean
    hadiah?: boolean
    kupon?: boolean | KuponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hadiah"]>



  export type HadiahSelectScalar = {
    id?: boolean
    id_kupon?: boolean
    nama?: boolean
    hadiah?: boolean
  }

  export type HadiahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_kupon" | "nama" | "hadiah", ExtArgs["result"]["hadiah"]>
  export type HadiahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kupon?: boolean | KuponDefaultArgs<ExtArgs>
  }

  export type $HadiahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hadiah"
    objects: {
      kupon: Prisma.$KuponPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_kupon: string
      nama: string
      hadiah: string
    }, ExtArgs["result"]["hadiah"]>
    composites: {}
  }

  type HadiahGetPayload<S extends boolean | null | undefined | HadiahDefaultArgs> = $Result.GetResult<Prisma.$HadiahPayload, S>

  type HadiahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HadiahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HadiahCountAggregateInputType | true
    }

  export interface HadiahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hadiah'], meta: { name: 'Hadiah' } }
    /**
     * Find zero or one Hadiah that matches the filter.
     * @param {HadiahFindUniqueArgs} args - Arguments to find a Hadiah
     * @example
     * // Get one Hadiah
     * const hadiah = await prisma.hadiah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HadiahFindUniqueArgs>(args: SelectSubset<T, HadiahFindUniqueArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hadiah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HadiahFindUniqueOrThrowArgs} args - Arguments to find a Hadiah
     * @example
     * // Get one Hadiah
     * const hadiah = await prisma.hadiah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HadiahFindUniqueOrThrowArgs>(args: SelectSubset<T, HadiahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hadiah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahFindFirstArgs} args - Arguments to find a Hadiah
     * @example
     * // Get one Hadiah
     * const hadiah = await prisma.hadiah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HadiahFindFirstArgs>(args?: SelectSubset<T, HadiahFindFirstArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hadiah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahFindFirstOrThrowArgs} args - Arguments to find a Hadiah
     * @example
     * // Get one Hadiah
     * const hadiah = await prisma.hadiah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HadiahFindFirstOrThrowArgs>(args?: SelectSubset<T, HadiahFindFirstOrThrowArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hadiahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hadiahs
     * const hadiahs = await prisma.hadiah.findMany()
     * 
     * // Get first 10 Hadiahs
     * const hadiahs = await prisma.hadiah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hadiahWithIdOnly = await prisma.hadiah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HadiahFindManyArgs>(args?: SelectSubset<T, HadiahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hadiah.
     * @param {HadiahCreateArgs} args - Arguments to create a Hadiah.
     * @example
     * // Create one Hadiah
     * const Hadiah = await prisma.hadiah.create({
     *   data: {
     *     // ... data to create a Hadiah
     *   }
     * })
     * 
     */
    create<T extends HadiahCreateArgs>(args: SelectSubset<T, HadiahCreateArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hadiahs.
     * @param {HadiahCreateManyArgs} args - Arguments to create many Hadiahs.
     * @example
     * // Create many Hadiahs
     * const hadiah = await prisma.hadiah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HadiahCreateManyArgs>(args?: SelectSubset<T, HadiahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hadiah.
     * @param {HadiahDeleteArgs} args - Arguments to delete one Hadiah.
     * @example
     * // Delete one Hadiah
     * const Hadiah = await prisma.hadiah.delete({
     *   where: {
     *     // ... filter to delete one Hadiah
     *   }
     * })
     * 
     */
    delete<T extends HadiahDeleteArgs>(args: SelectSubset<T, HadiahDeleteArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hadiah.
     * @param {HadiahUpdateArgs} args - Arguments to update one Hadiah.
     * @example
     * // Update one Hadiah
     * const hadiah = await prisma.hadiah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HadiahUpdateArgs>(args: SelectSubset<T, HadiahUpdateArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hadiahs.
     * @param {HadiahDeleteManyArgs} args - Arguments to filter Hadiahs to delete.
     * @example
     * // Delete a few Hadiahs
     * const { count } = await prisma.hadiah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HadiahDeleteManyArgs>(args?: SelectSubset<T, HadiahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hadiahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hadiahs
     * const hadiah = await prisma.hadiah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HadiahUpdateManyArgs>(args: SelectSubset<T, HadiahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hadiah.
     * @param {HadiahUpsertArgs} args - Arguments to update or create a Hadiah.
     * @example
     * // Update or create a Hadiah
     * const hadiah = await prisma.hadiah.upsert({
     *   create: {
     *     // ... data to create a Hadiah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hadiah we want to update
     *   }
     * })
     */
    upsert<T extends HadiahUpsertArgs>(args: SelectSubset<T, HadiahUpsertArgs<ExtArgs>>): Prisma__HadiahClient<$Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hadiahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahCountArgs} args - Arguments to filter Hadiahs to count.
     * @example
     * // Count the number of Hadiahs
     * const count = await prisma.hadiah.count({
     *   where: {
     *     // ... the filter for the Hadiahs we want to count
     *   }
     * })
    **/
    count<T extends HadiahCountArgs>(
      args?: Subset<T, HadiahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HadiahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hadiah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HadiahAggregateArgs>(args: Subset<T, HadiahAggregateArgs>): Prisma.PrismaPromise<GetHadiahAggregateType<T>>

    /**
     * Group by Hadiah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HadiahGroupByArgs} args - Group by arguments.
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
      T extends HadiahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HadiahGroupByArgs['orderBy'] }
        : { orderBy?: HadiahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HadiahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHadiahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hadiah model
   */
  readonly fields: HadiahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hadiah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HadiahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kupon<T extends KuponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KuponDefaultArgs<ExtArgs>>): Prisma__KuponClient<$Result.GetResult<Prisma.$KuponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Hadiah model
   */
  interface HadiahFieldRefs {
    readonly id: FieldRef<"Hadiah", 'Int'>
    readonly id_kupon: FieldRef<"Hadiah", 'String'>
    readonly nama: FieldRef<"Hadiah", 'String'>
    readonly hadiah: FieldRef<"Hadiah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hadiah findUnique
   */
  export type HadiahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * Filter, which Hadiah to fetch.
     */
    where: HadiahWhereUniqueInput
  }

  /**
   * Hadiah findUniqueOrThrow
   */
  export type HadiahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * Filter, which Hadiah to fetch.
     */
    where: HadiahWhereUniqueInput
  }

  /**
   * Hadiah findFirst
   */
  export type HadiahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * Filter, which Hadiah to fetch.
     */
    where?: HadiahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadiahs to fetch.
     */
    orderBy?: HadiahOrderByWithRelationInput | HadiahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hadiahs.
     */
    cursor?: HadiahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadiahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadiahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hadiahs.
     */
    distinct?: HadiahScalarFieldEnum | HadiahScalarFieldEnum[]
  }

  /**
   * Hadiah findFirstOrThrow
   */
  export type HadiahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * Filter, which Hadiah to fetch.
     */
    where?: HadiahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadiahs to fetch.
     */
    orderBy?: HadiahOrderByWithRelationInput | HadiahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hadiahs.
     */
    cursor?: HadiahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadiahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadiahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hadiahs.
     */
    distinct?: HadiahScalarFieldEnum | HadiahScalarFieldEnum[]
  }

  /**
   * Hadiah findMany
   */
  export type HadiahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * Filter, which Hadiahs to fetch.
     */
    where?: HadiahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadiahs to fetch.
     */
    orderBy?: HadiahOrderByWithRelationInput | HadiahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hadiahs.
     */
    cursor?: HadiahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadiahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadiahs.
     */
    skip?: number
    distinct?: HadiahScalarFieldEnum | HadiahScalarFieldEnum[]
  }

  /**
   * Hadiah create
   */
  export type HadiahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * The data needed to create a Hadiah.
     */
    data: XOR<HadiahCreateInput, HadiahUncheckedCreateInput>
  }

  /**
   * Hadiah createMany
   */
  export type HadiahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hadiahs.
     */
    data: HadiahCreateManyInput | HadiahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hadiah update
   */
  export type HadiahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * The data needed to update a Hadiah.
     */
    data: XOR<HadiahUpdateInput, HadiahUncheckedUpdateInput>
    /**
     * Choose, which Hadiah to update.
     */
    where: HadiahWhereUniqueInput
  }

  /**
   * Hadiah updateMany
   */
  export type HadiahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hadiahs.
     */
    data: XOR<HadiahUpdateManyMutationInput, HadiahUncheckedUpdateManyInput>
    /**
     * Filter which Hadiahs to update
     */
    where?: HadiahWhereInput
    /**
     * Limit how many Hadiahs to update.
     */
    limit?: number
  }

  /**
   * Hadiah upsert
   */
  export type HadiahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * The filter to search for the Hadiah to update in case it exists.
     */
    where: HadiahWhereUniqueInput
    /**
     * In case the Hadiah found by the `where` argument doesn't exist, create a new Hadiah with this data.
     */
    create: XOR<HadiahCreateInput, HadiahUncheckedCreateInput>
    /**
     * In case the Hadiah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HadiahUpdateInput, HadiahUncheckedUpdateInput>
  }

  /**
   * Hadiah delete
   */
  export type HadiahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
    /**
     * Filter which Hadiah to delete.
     */
    where: HadiahWhereUniqueInput
  }

  /**
   * Hadiah deleteMany
   */
  export type HadiahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hadiahs to delete
     */
    where?: HadiahWhereInput
    /**
     * Limit how many Hadiahs to delete.
     */
    limit?: number
  }

  /**
   * Hadiah without action
   */
  export type HadiahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadiah
     */
    select?: HadiahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadiah
     */
    omit?: HadiahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HadiahInclude<ExtArgs> | null
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


  export const KuponScalarFieldEnum: {
    id_kupon: 'id_kupon',
    nama: 'nama',
    jabatan: 'jabatan',
    unit_kerja: 'unit_kerja',
    kehadiran: 'kehadiran'
  };

  export type KuponScalarFieldEnum = (typeof KuponScalarFieldEnum)[keyof typeof KuponScalarFieldEnum]


  export const HadiahScalarFieldEnum: {
    id: 'id',
    id_kupon: 'id_kupon',
    nama: 'nama',
    hadiah: 'hadiah'
  };

  export type HadiahScalarFieldEnum = (typeof HadiahScalarFieldEnum)[keyof typeof HadiahScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const KuponOrderByRelevanceFieldEnum: {
    id_kupon: 'id_kupon',
    nama: 'nama',
    jabatan: 'jabatan',
    unit_kerja: 'unit_kerja'
  };

  export type KuponOrderByRelevanceFieldEnum = (typeof KuponOrderByRelevanceFieldEnum)[keyof typeof KuponOrderByRelevanceFieldEnum]


  export const HadiahOrderByRelevanceFieldEnum: {
    id_kupon: 'id_kupon',
    nama: 'nama',
    hadiah: 'hadiah'
  };

  export type HadiahOrderByRelevanceFieldEnum = (typeof HadiahOrderByRelevanceFieldEnum)[keyof typeof HadiahOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type KuponWhereInput = {
    AND?: KuponWhereInput | KuponWhereInput[]
    OR?: KuponWhereInput[]
    NOT?: KuponWhereInput | KuponWhereInput[]
    id_kupon?: StringFilter<"Kupon"> | string
    nama?: StringFilter<"Kupon"> | string
    jabatan?: StringFilter<"Kupon"> | string
    unit_kerja?: StringFilter<"Kupon"> | string
    kehadiran?: BoolFilter<"Kupon"> | boolean
    hadiah?: XOR<HadiahNullableScalarRelationFilter, HadiahWhereInput> | null
  }

  export type KuponOrderByWithRelationInput = {
    id_kupon?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    unit_kerja?: SortOrder
    kehadiran?: SortOrder
    hadiah?: HadiahOrderByWithRelationInput
    _relevance?: KuponOrderByRelevanceInput
  }

  export type KuponWhereUniqueInput = Prisma.AtLeast<{
    id_kupon?: string
    AND?: KuponWhereInput | KuponWhereInput[]
    OR?: KuponWhereInput[]
    NOT?: KuponWhereInput | KuponWhereInput[]
    nama?: StringFilter<"Kupon"> | string
    jabatan?: StringFilter<"Kupon"> | string
    unit_kerja?: StringFilter<"Kupon"> | string
    kehadiran?: BoolFilter<"Kupon"> | boolean
    hadiah?: XOR<HadiahNullableScalarRelationFilter, HadiahWhereInput> | null
  }, "id_kupon">

  export type KuponOrderByWithAggregationInput = {
    id_kupon?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    unit_kerja?: SortOrder
    kehadiran?: SortOrder
    _count?: KuponCountOrderByAggregateInput
    _max?: KuponMaxOrderByAggregateInput
    _min?: KuponMinOrderByAggregateInput
  }

  export type KuponScalarWhereWithAggregatesInput = {
    AND?: KuponScalarWhereWithAggregatesInput | KuponScalarWhereWithAggregatesInput[]
    OR?: KuponScalarWhereWithAggregatesInput[]
    NOT?: KuponScalarWhereWithAggregatesInput | KuponScalarWhereWithAggregatesInput[]
    id_kupon?: StringWithAggregatesFilter<"Kupon"> | string
    nama?: StringWithAggregatesFilter<"Kupon"> | string
    jabatan?: StringWithAggregatesFilter<"Kupon"> | string
    unit_kerja?: StringWithAggregatesFilter<"Kupon"> | string
    kehadiran?: BoolWithAggregatesFilter<"Kupon"> | boolean
  }

  export type HadiahWhereInput = {
    AND?: HadiahWhereInput | HadiahWhereInput[]
    OR?: HadiahWhereInput[]
    NOT?: HadiahWhereInput | HadiahWhereInput[]
    id?: IntFilter<"Hadiah"> | number
    id_kupon?: StringFilter<"Hadiah"> | string
    nama?: StringFilter<"Hadiah"> | string
    hadiah?: StringFilter<"Hadiah"> | string
    kupon?: XOR<KuponScalarRelationFilter, KuponWhereInput>
  }

  export type HadiahOrderByWithRelationInput = {
    id?: SortOrder
    id_kupon?: SortOrder
    nama?: SortOrder
    hadiah?: SortOrder
    kupon?: KuponOrderByWithRelationInput
    _relevance?: HadiahOrderByRelevanceInput
  }

  export type HadiahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_kupon?: string
    AND?: HadiahWhereInput | HadiahWhereInput[]
    OR?: HadiahWhereInput[]
    NOT?: HadiahWhereInput | HadiahWhereInput[]
    nama?: StringFilter<"Hadiah"> | string
    hadiah?: StringFilter<"Hadiah"> | string
    kupon?: XOR<KuponScalarRelationFilter, KuponWhereInput>
  }, "id" | "id_kupon">

  export type HadiahOrderByWithAggregationInput = {
    id?: SortOrder
    id_kupon?: SortOrder
    nama?: SortOrder
    hadiah?: SortOrder
    _count?: HadiahCountOrderByAggregateInput
    _avg?: HadiahAvgOrderByAggregateInput
    _max?: HadiahMaxOrderByAggregateInput
    _min?: HadiahMinOrderByAggregateInput
    _sum?: HadiahSumOrderByAggregateInput
  }

  export type HadiahScalarWhereWithAggregatesInput = {
    AND?: HadiahScalarWhereWithAggregatesInput | HadiahScalarWhereWithAggregatesInput[]
    OR?: HadiahScalarWhereWithAggregatesInput[]
    NOT?: HadiahScalarWhereWithAggregatesInput | HadiahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hadiah"> | number
    id_kupon?: StringWithAggregatesFilter<"Hadiah"> | string
    nama?: StringWithAggregatesFilter<"Hadiah"> | string
    hadiah?: StringWithAggregatesFilter<"Hadiah"> | string
  }

  export type KuponCreateInput = {
    id_kupon: string
    nama: string
    jabatan: string
    unit_kerja: string
    kehadiran?: boolean
    hadiah?: HadiahCreateNestedOneWithoutKuponInput
  }

  export type KuponUncheckedCreateInput = {
    id_kupon: string
    nama: string
    jabatan: string
    unit_kerja: string
    kehadiran?: boolean
    hadiah?: HadiahUncheckedCreateNestedOneWithoutKuponInput
  }

  export type KuponUpdateInput = {
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    unit_kerja?: StringFieldUpdateOperationsInput | string
    kehadiran?: BoolFieldUpdateOperationsInput | boolean
    hadiah?: HadiahUpdateOneWithoutKuponNestedInput
  }

  export type KuponUncheckedUpdateInput = {
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    unit_kerja?: StringFieldUpdateOperationsInput | string
    kehadiran?: BoolFieldUpdateOperationsInput | boolean
    hadiah?: HadiahUncheckedUpdateOneWithoutKuponNestedInput
  }

  export type KuponCreateManyInput = {
    id_kupon: string
    nama: string
    jabatan: string
    unit_kerja: string
    kehadiran?: boolean
  }

  export type KuponUpdateManyMutationInput = {
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    unit_kerja?: StringFieldUpdateOperationsInput | string
    kehadiran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KuponUncheckedUpdateManyInput = {
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    unit_kerja?: StringFieldUpdateOperationsInput | string
    kehadiran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HadiahCreateInput = {
    nama: string
    hadiah: string
    kupon: KuponCreateNestedOneWithoutHadiahInput
  }

  export type HadiahUncheckedCreateInput = {
    id?: number
    id_kupon: string
    nama: string
    hadiah: string
  }

  export type HadiahUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hadiah?: StringFieldUpdateOperationsInput | string
    kupon?: KuponUpdateOneRequiredWithoutHadiahNestedInput
  }

  export type HadiahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hadiah?: StringFieldUpdateOperationsInput | string
  }

  export type HadiahCreateManyInput = {
    id?: number
    id_kupon: string
    nama: string
    hadiah: string
  }

  export type HadiahUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hadiah?: StringFieldUpdateOperationsInput | string
  }

  export type HadiahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hadiah?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HadiahNullableScalarRelationFilter = {
    is?: HadiahWhereInput | null
    isNot?: HadiahWhereInput | null
  }

  export type KuponOrderByRelevanceInput = {
    fields: KuponOrderByRelevanceFieldEnum | KuponOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KuponCountOrderByAggregateInput = {
    id_kupon?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    unit_kerja?: SortOrder
    kehadiran?: SortOrder
  }

  export type KuponMaxOrderByAggregateInput = {
    id_kupon?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    unit_kerja?: SortOrder
    kehadiran?: SortOrder
  }

  export type KuponMinOrderByAggregateInput = {
    id_kupon?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    unit_kerja?: SortOrder
    kehadiran?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KuponScalarRelationFilter = {
    is?: KuponWhereInput
    isNot?: KuponWhereInput
  }

  export type HadiahOrderByRelevanceInput = {
    fields: HadiahOrderByRelevanceFieldEnum | HadiahOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HadiahCountOrderByAggregateInput = {
    id?: SortOrder
    id_kupon?: SortOrder
    nama?: SortOrder
    hadiah?: SortOrder
  }

  export type HadiahAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HadiahMaxOrderByAggregateInput = {
    id?: SortOrder
    id_kupon?: SortOrder
    nama?: SortOrder
    hadiah?: SortOrder
  }

  export type HadiahMinOrderByAggregateInput = {
    id?: SortOrder
    id_kupon?: SortOrder
    nama?: SortOrder
    hadiah?: SortOrder
  }

  export type HadiahSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type HadiahCreateNestedOneWithoutKuponInput = {
    create?: XOR<HadiahCreateWithoutKuponInput, HadiahUncheckedCreateWithoutKuponInput>
    connectOrCreate?: HadiahCreateOrConnectWithoutKuponInput
    connect?: HadiahWhereUniqueInput
  }

  export type HadiahUncheckedCreateNestedOneWithoutKuponInput = {
    create?: XOR<HadiahCreateWithoutKuponInput, HadiahUncheckedCreateWithoutKuponInput>
    connectOrCreate?: HadiahCreateOrConnectWithoutKuponInput
    connect?: HadiahWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HadiahUpdateOneWithoutKuponNestedInput = {
    create?: XOR<HadiahCreateWithoutKuponInput, HadiahUncheckedCreateWithoutKuponInput>
    connectOrCreate?: HadiahCreateOrConnectWithoutKuponInput
    upsert?: HadiahUpsertWithoutKuponInput
    disconnect?: HadiahWhereInput | boolean
    delete?: HadiahWhereInput | boolean
    connect?: HadiahWhereUniqueInput
    update?: XOR<XOR<HadiahUpdateToOneWithWhereWithoutKuponInput, HadiahUpdateWithoutKuponInput>, HadiahUncheckedUpdateWithoutKuponInput>
  }

  export type HadiahUncheckedUpdateOneWithoutKuponNestedInput = {
    create?: XOR<HadiahCreateWithoutKuponInput, HadiahUncheckedCreateWithoutKuponInput>
    connectOrCreate?: HadiahCreateOrConnectWithoutKuponInput
    upsert?: HadiahUpsertWithoutKuponInput
    disconnect?: HadiahWhereInput | boolean
    delete?: HadiahWhereInput | boolean
    connect?: HadiahWhereUniqueInput
    update?: XOR<XOR<HadiahUpdateToOneWithWhereWithoutKuponInput, HadiahUpdateWithoutKuponInput>, HadiahUncheckedUpdateWithoutKuponInput>
  }

  export type KuponCreateNestedOneWithoutHadiahInput = {
    create?: XOR<KuponCreateWithoutHadiahInput, KuponUncheckedCreateWithoutHadiahInput>
    connectOrCreate?: KuponCreateOrConnectWithoutHadiahInput
    connect?: KuponWhereUniqueInput
  }

  export type KuponUpdateOneRequiredWithoutHadiahNestedInput = {
    create?: XOR<KuponCreateWithoutHadiahInput, KuponUncheckedCreateWithoutHadiahInput>
    connectOrCreate?: KuponCreateOrConnectWithoutHadiahInput
    upsert?: KuponUpsertWithoutHadiahInput
    connect?: KuponWhereUniqueInput
    update?: XOR<XOR<KuponUpdateToOneWithWhereWithoutHadiahInput, KuponUpdateWithoutHadiahInput>, KuponUncheckedUpdateWithoutHadiahInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HadiahCreateWithoutKuponInput = {
    nama: string
    hadiah: string
  }

  export type HadiahUncheckedCreateWithoutKuponInput = {
    id?: number
    nama: string
    hadiah: string
  }

  export type HadiahCreateOrConnectWithoutKuponInput = {
    where: HadiahWhereUniqueInput
    create: XOR<HadiahCreateWithoutKuponInput, HadiahUncheckedCreateWithoutKuponInput>
  }

  export type HadiahUpsertWithoutKuponInput = {
    update: XOR<HadiahUpdateWithoutKuponInput, HadiahUncheckedUpdateWithoutKuponInput>
    create: XOR<HadiahCreateWithoutKuponInput, HadiahUncheckedCreateWithoutKuponInput>
    where?: HadiahWhereInput
  }

  export type HadiahUpdateToOneWithWhereWithoutKuponInput = {
    where?: HadiahWhereInput
    data: XOR<HadiahUpdateWithoutKuponInput, HadiahUncheckedUpdateWithoutKuponInput>
  }

  export type HadiahUpdateWithoutKuponInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hadiah?: StringFieldUpdateOperationsInput | string
  }

  export type HadiahUncheckedUpdateWithoutKuponInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    hadiah?: StringFieldUpdateOperationsInput | string
  }

  export type KuponCreateWithoutHadiahInput = {
    id_kupon: string
    nama: string
    jabatan: string
    unit_kerja: string
    kehadiran?: boolean
  }

  export type KuponUncheckedCreateWithoutHadiahInput = {
    id_kupon: string
    nama: string
    jabatan: string
    unit_kerja: string
    kehadiran?: boolean
  }

  export type KuponCreateOrConnectWithoutHadiahInput = {
    where: KuponWhereUniqueInput
    create: XOR<KuponCreateWithoutHadiahInput, KuponUncheckedCreateWithoutHadiahInput>
  }

  export type KuponUpsertWithoutHadiahInput = {
    update: XOR<KuponUpdateWithoutHadiahInput, KuponUncheckedUpdateWithoutHadiahInput>
    create: XOR<KuponCreateWithoutHadiahInput, KuponUncheckedCreateWithoutHadiahInput>
    where?: KuponWhereInput
  }

  export type KuponUpdateToOneWithWhereWithoutHadiahInput = {
    where?: KuponWhereInput
    data: XOR<KuponUpdateWithoutHadiahInput, KuponUncheckedUpdateWithoutHadiahInput>
  }

  export type KuponUpdateWithoutHadiahInput = {
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    unit_kerja?: StringFieldUpdateOperationsInput | string
    kehadiran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KuponUncheckedUpdateWithoutHadiahInput = {
    id_kupon?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    unit_kerja?: StringFieldUpdateOperationsInput | string
    kehadiran?: BoolFieldUpdateOperationsInput | boolean
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