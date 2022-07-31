import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserOnStudyGroupArgs } from "./args/AggregateUserOnStudyGroupArgs";
import { CreateManyUserOnStudyGroupArgs } from "./args/CreateManyUserOnStudyGroupArgs";
import { CreateUserOnStudyGroupArgs } from "./args/CreateUserOnStudyGroupArgs";
import { DeleteManyUserOnStudyGroupArgs } from "./args/DeleteManyUserOnStudyGroupArgs";
import { DeleteUserOnStudyGroupArgs } from "./args/DeleteUserOnStudyGroupArgs";
import { FindFirstUserOnStudyGroupArgs } from "./args/FindFirstUserOnStudyGroupArgs";
import { FindManyUserOnStudyGroupArgs } from "./args/FindManyUserOnStudyGroupArgs";
import { FindUniqueUserOnStudyGroupArgs } from "./args/FindUniqueUserOnStudyGroupArgs";
import { GroupByUserOnStudyGroupArgs } from "./args/GroupByUserOnStudyGroupArgs";
import { UpdateManyUserOnStudyGroupArgs } from "./args/UpdateManyUserOnStudyGroupArgs";
import { UpdateUserOnStudyGroupArgs } from "./args/UpdateUserOnStudyGroupArgs";
import { UpsertUserOnStudyGroupArgs } from "./args/UpsertUserOnStudyGroupArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserOnStudyGroup } from "../../outputs/AggregateUserOnStudyGroup";
import { UserOnStudyGroupGroupBy } from "../../outputs/UserOnStudyGroupGroupBy";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class UserOnStudyGroupCrudResolver {
  @TypeGraphQL.Query(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async userOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async findFirstUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserOnStudyGroup], {
    nullable: false
  })
  async userOnStudyGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserOnStudyGroupArgs): Promise<UserOnStudyGroup[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserOnStudyGroup, {
    nullable: false
  })
  async createUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUserOnStudyGroupArgs): Promise<UserOnStudyGroup> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserOnStudyGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async deleteUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async updateUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserOnStudyGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserOnStudyGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserOnStudyGroup, {
    nullable: false
  })
  async upsertUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertUserOnStudyGroupArgs): Promise<UserOnStudyGroup> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateUserOnStudyGroup, {
    nullable: false
  })
  async aggregateUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserOnStudyGroupArgs): Promise<AggregateUserOnStudyGroup> {
    return getPrismaFromContext(ctx).userOnStudyGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserOnStudyGroupGroupBy], {
    nullable: false
  })
  async groupByUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserOnStudyGroupArgs): Promise<UserOnStudyGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
