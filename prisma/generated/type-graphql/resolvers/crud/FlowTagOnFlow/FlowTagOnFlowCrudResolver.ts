import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlowTagOnFlowArgs } from "./args/AggregateFlowTagOnFlowArgs";
import { CreateFlowTagOnFlowArgs } from "./args/CreateFlowTagOnFlowArgs";
import { CreateManyFlowTagOnFlowArgs } from "./args/CreateManyFlowTagOnFlowArgs";
import { DeleteFlowTagOnFlowArgs } from "./args/DeleteFlowTagOnFlowArgs";
import { DeleteManyFlowTagOnFlowArgs } from "./args/DeleteManyFlowTagOnFlowArgs";
import { FindFirstFlowTagOnFlowArgs } from "./args/FindFirstFlowTagOnFlowArgs";
import { FindManyFlowTagOnFlowArgs } from "./args/FindManyFlowTagOnFlowArgs";
import { FindUniqueFlowTagOnFlowArgs } from "./args/FindUniqueFlowTagOnFlowArgs";
import { GroupByFlowTagOnFlowArgs } from "./args/GroupByFlowTagOnFlowArgs";
import { UpdateFlowTagOnFlowArgs } from "./args/UpdateFlowTagOnFlowArgs";
import { UpdateManyFlowTagOnFlowArgs } from "./args/UpdateManyFlowTagOnFlowArgs";
import { UpsertFlowTagOnFlowArgs } from "./args/UpsertFlowTagOnFlowArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFlowTagOnFlow } from "../../outputs/AggregateFlowTagOnFlow";
import { FlowTagOnFlowGroupBy } from "../../outputs/FlowTagOnFlowGroupBy";

@TypeGraphQL.Resolver(_of => FlowTagOnFlow)
export class FlowTagOnFlowCrudResolver {
  @TypeGraphQL.Query(_returns => FlowTagOnFlow, {
    nullable: true
  })
  async flowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlowTagOnFlowArgs): Promise<FlowTagOnFlow | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FlowTagOnFlow, {
    nullable: true
  })
  async findFirstFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFlowTagOnFlowArgs): Promise<FlowTagOnFlow | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FlowTagOnFlow], {
    nullable: false
  })
  async flowTagOnFlows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFlowTagOnFlowArgs): Promise<FlowTagOnFlow[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlowTagOnFlow, {
    nullable: false
  })
  async createFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFlowTagOnFlowArgs): Promise<FlowTagOnFlow> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFlowTagOnFlowArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlowTagOnFlow, {
    nullable: true
  })
  async deleteFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFlowTagOnFlowArgs): Promise<FlowTagOnFlow | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlowTagOnFlow, {
    nullable: true
  })
  async updateFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFlowTagOnFlowArgs): Promise<FlowTagOnFlow | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFlowTagOnFlowArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFlowTagOnFlowArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlowTagOnFlow, {
    nullable: false
  })
  async upsertFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFlowTagOnFlowArgs): Promise<FlowTagOnFlow> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateFlowTagOnFlow, {
    nullable: false
  })
  async aggregateFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlowTagOnFlowArgs): Promise<AggregateFlowTagOnFlow> {
    return getPrismaFromContext(ctx).flowTagOnFlow.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [FlowTagOnFlowGroupBy], {
    nullable: false
  })
  async groupByFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlowTagOnFlowArgs): Promise<FlowTagOnFlowGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
