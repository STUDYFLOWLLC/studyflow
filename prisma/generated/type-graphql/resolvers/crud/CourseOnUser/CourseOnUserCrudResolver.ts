import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCourseOnUserArgs } from "./args/AggregateCourseOnUserArgs";
import { CreateCourseOnUserArgs } from "./args/CreateCourseOnUserArgs";
import { CreateManyCourseOnUserArgs } from "./args/CreateManyCourseOnUserArgs";
import { DeleteCourseOnUserArgs } from "./args/DeleteCourseOnUserArgs";
import { DeleteManyCourseOnUserArgs } from "./args/DeleteManyCourseOnUserArgs";
import { FindFirstCourseOnUserArgs } from "./args/FindFirstCourseOnUserArgs";
import { FindManyCourseOnUserArgs } from "./args/FindManyCourseOnUserArgs";
import { FindUniqueCourseOnUserArgs } from "./args/FindUniqueCourseOnUserArgs";
import { GroupByCourseOnUserArgs } from "./args/GroupByCourseOnUserArgs";
import { UpdateCourseOnUserArgs } from "./args/UpdateCourseOnUserArgs";
import { UpdateManyCourseOnUserArgs } from "./args/UpdateManyCourseOnUserArgs";
import { UpsertCourseOnUserArgs } from "./args/UpsertCourseOnUserArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCourseOnUser } from "../../outputs/AggregateCourseOnUser";
import { CourseOnUserGroupBy } from "../../outputs/CourseOnUserGroupBy";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class CourseOnUserCrudResolver {
  @TypeGraphQL.Query(_returns => CourseOnUser, {
    nullable: true
  })
  async courseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCourseOnUserArgs): Promise<CourseOnUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CourseOnUser, {
    nullable: true
  })
  async findFirstCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCourseOnUserArgs): Promise<CourseOnUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CourseOnUser], {
    nullable: false
  })
  async courseOnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCourseOnUserArgs): Promise<CourseOnUser[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnUser, {
    nullable: false
  })
  async createCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCourseOnUserArgs): Promise<CourseOnUser> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCourseOnUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnUser, {
    nullable: true
  })
  async deleteCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCourseOnUserArgs): Promise<CourseOnUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnUser, {
    nullable: true
  })
  async updateCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCourseOnUserArgs): Promise<CourseOnUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCourseOnUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCourseOnUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnUser, {
    nullable: false
  })
  async upsertCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCourseOnUserArgs): Promise<CourseOnUser> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCourseOnUser, {
    nullable: false
  })
  async aggregateCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCourseOnUserArgs): Promise<AggregateCourseOnUser> {
    return getPrismaFromContext(ctx).courseOnUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CourseOnUserGroupBy], {
    nullable: false
  })
  async groupByCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCourseOnUserArgs): Promise<CourseOnUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
