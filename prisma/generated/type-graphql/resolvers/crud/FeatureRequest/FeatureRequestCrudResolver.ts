import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFeatureRequestArgs } from "./args/AggregateFeatureRequestArgs";
import { CreateFeatureRequestArgs } from "./args/CreateFeatureRequestArgs";
import { CreateManyFeatureRequestArgs } from "./args/CreateManyFeatureRequestArgs";
import { DeleteFeatureRequestArgs } from "./args/DeleteFeatureRequestArgs";
import { DeleteManyFeatureRequestArgs } from "./args/DeleteManyFeatureRequestArgs";
import { FindFirstFeatureRequestArgs } from "./args/FindFirstFeatureRequestArgs";
import { FindManyFeatureRequestArgs } from "./args/FindManyFeatureRequestArgs";
import { FindUniqueFeatureRequestArgs } from "./args/FindUniqueFeatureRequestArgs";
import { GroupByFeatureRequestArgs } from "./args/GroupByFeatureRequestArgs";
import { UpdateFeatureRequestArgs } from "./args/UpdateFeatureRequestArgs";
import { UpdateManyFeatureRequestArgs } from "./args/UpdateManyFeatureRequestArgs";
import { UpsertFeatureRequestArgs } from "./args/UpsertFeatureRequestArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFeatureRequest } from "../../outputs/AggregateFeatureRequest";
import { FeatureRequestGroupBy } from "../../outputs/FeatureRequestGroupBy";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class FeatureRequestCrudResolver {
  @TypeGraphQL.Query(_returns => FeatureRequest, {
    nullable: true
  })
  async featureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFeatureRequestArgs): Promise<FeatureRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FeatureRequest, {
    nullable: true
  })
  async findFirstFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFeatureRequestArgs): Promise<FeatureRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FeatureRequest], {
    nullable: false
  })
  async featureRequests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFeatureRequestArgs): Promise<FeatureRequest[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FeatureRequest, {
    nullable: false
  })
  async createFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFeatureRequestArgs): Promise<FeatureRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFeatureRequestArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FeatureRequest, {
    nullable: true
  })
  async deleteFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFeatureRequestArgs): Promise<FeatureRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FeatureRequest, {
    nullable: true
  })
  async updateFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFeatureRequestArgs): Promise<FeatureRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFeatureRequestArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFeatureRequestArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FeatureRequest, {
    nullable: false
  })
  async upsertFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFeatureRequestArgs): Promise<FeatureRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateFeatureRequest, {
    nullable: false
  })
  async aggregateFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFeatureRequestArgs): Promise<AggregateFeatureRequest> {
    return getPrismaFromContext(ctx).featureRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [FeatureRequestGroupBy], {
    nullable: false
  })
  async groupByFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFeatureRequestArgs): Promise<FeatureRequestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
