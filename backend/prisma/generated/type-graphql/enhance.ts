import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Flow: crudResolvers.FlowCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Flow: {
    flow: actionResolvers.FindUniqueFlowResolver,
    findFirstFlow: actionResolvers.FindFirstFlowResolver,
    flows: actionResolvers.FindManyFlowResolver,
    createFlow: actionResolvers.CreateFlowResolver,
    createManyFlow: actionResolvers.CreateManyFlowResolver,
    deleteFlow: actionResolvers.DeleteFlowResolver,
    updateFlow: actionResolvers.UpdateFlowResolver,
    deleteManyFlow: actionResolvers.DeleteManyFlowResolver,
    updateManyFlow: actionResolvers.UpdateManyFlowResolver,
    upsertFlow: actionResolvers.UpsertFlowResolver,
    aggregateFlow: actionResolvers.AggregateFlowResolver,
    groupByFlow: actionResolvers.GroupByFlowResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Flow: ["flow", "findFirstFlow", "flows", "createFlow", "createManyFlow", "deleteFlow", "updateFlow", "deleteManyFlow", "updateManyFlow", "upsertFlow", "aggregateFlow", "groupByFlow"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFlowArgs: ["where"],
  FindFirstFlowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFlowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFlowArgs: ["data"],
  CreateManyFlowArgs: ["data", "skipDuplicates"],
  DeleteFlowArgs: ["where"],
  UpdateFlowArgs: ["data", "where"],
  DeleteManyFlowArgs: ["where"],
  UpdateManyFlowArgs: ["data", "where"],
  UpsertFlowArgs: ["where", "create", "update"],
  AggregateFlowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFlowArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Flow: relationResolvers.FlowRelationsResolver
};
const relationResolversInfo = {
  User: ["Flows"],
  Flow: ["CreatedByUser"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  Flow: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlow: ["_count", "_avg", "_sum", "_min", "_max"],
  FlowGroupBy: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["Flows"],
  UserCountAggregate: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "_all"],
  UserAvgAggregate: ["UserID"],
  UserSumAggregate: ["UserID"],
  UserMinAggregate: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  UserMaxAggregate: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  FlowCountAggregate: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility", "_all"],
  FlowAvgAggregate: ["FlowID", "CreatedById"],
  FlowSumAggregate: ["FlowID", "CreatedById"],
  FlowMinAggregate: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  FlowMaxAggregate: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "Flows"],
  UserOrderByWithRelationInput: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "Flows"],
  UserWhereUniqueInput: ["UserID"],
  UserOrderByWithAggregationInput: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  FlowWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "CreatedByUser", "CreatedById", "Title", "Body", "Visibility"],
  FlowOrderByWithRelationInput: ["FlowID", "CreatedTime", "CreatedByUser", "CreatedById", "Title", "Body", "Visibility"],
  FlowWhereUniqueInput: ["FlowID"],
  FlowOrderByWithAggregationInput: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility", "_count", "_avg", "_max", "_min", "_sum"],
  FlowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  UserCreateInput: ["Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "Flows"],
  UserUpdateInput: ["Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility", "Flows"],
  UserCreateManyInput: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  UserUpdateManyMutationInput: ["Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  FlowCreateInput: ["CreatedTime", "CreatedByUser", "Title", "Body", "Visibility"],
  FlowUpdateInput: ["CreatedTime", "CreatedByUser", "Title", "Body", "Visibility"],
  FlowCreateManyInput: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  FlowUpdateManyMutationInput: ["CreatedTime", "Title", "Body", "Visibility"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  FlowListRelationFilter: ["every", "some", "none"],
  FlowOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  UserAvgOrderByAggregateInput: ["UserID"],
  UserMaxOrderByAggregateInput: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  UserMinOrderByAggregateInput: ["UserID", "Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  UserSumOrderByAggregateInput: ["UserID"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FlowCountOrderByAggregateInput: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  FlowAvgOrderByAggregateInput: ["FlowID", "CreatedById"],
  FlowMaxOrderByAggregateInput: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  FlowMinOrderByAggregateInput: ["FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  FlowSumOrderByAggregateInput: ["FlowID", "CreatedById"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FlowCreateNestedManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumVisibilityFieldUpdateOperationsInput: ["set"],
  FlowUpdateManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutFlowsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutFlowsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FlowCreateWithoutCreatedByUserInput: ["CreatedTime", "Title", "Body", "Visibility"],
  FlowCreateOrConnectWithoutCreatedByUserInput: ["where", "create"],
  FlowCreateManyCreatedByUserInputEnvelope: ["data", "skipDuplicates"],
  FlowUpsertWithWhereUniqueWithoutCreatedByUserInput: ["where", "update", "create"],
  FlowUpdateWithWhereUniqueWithoutCreatedByUserInput: ["where", "data"],
  FlowUpdateManyWithWhereWithoutCreatedByUserInput: ["where", "data"],
  FlowScalarWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "CreatedById", "Title", "Body", "Visibility"],
  UserCreateWithoutFlowsInput: ["Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  UserCreateOrConnectWithoutFlowsInput: ["where", "create"],
  UserUpsertWithoutFlowsInput: ["update", "create"],
  UserUpdateWithoutFlowsInput: ["Email", "UID", "DisplayName", "ProfilePictureLink", "DefaultVisibility"],
  FlowCreateManyCreatedByUserInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility"],
  FlowUpdateWithoutCreatedByUserInput: ["CreatedTime", "Title", "Body", "Visibility"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

