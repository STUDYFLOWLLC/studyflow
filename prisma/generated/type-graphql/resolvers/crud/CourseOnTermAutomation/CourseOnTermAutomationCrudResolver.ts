import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCourseOnTermAutomationArgs } from "./args/AggregateCourseOnTermAutomationArgs";
import { CreateCourseOnTermAutomationArgs } from "./args/CreateCourseOnTermAutomationArgs";
import { CreateManyCourseOnTermAutomationArgs } from "./args/CreateManyCourseOnTermAutomationArgs";
import { DeleteCourseOnTermAutomationArgs } from "./args/DeleteCourseOnTermAutomationArgs";
import { DeleteManyCourseOnTermAutomationArgs } from "./args/DeleteManyCourseOnTermAutomationArgs";
import { FindFirstCourseOnTermAutomationArgs } from "./args/FindFirstCourseOnTermAutomationArgs";
import { FindManyCourseOnTermAutomationArgs } from "./args/FindManyCourseOnTermAutomationArgs";
import { FindUniqueCourseOnTermAutomationArgs } from "./args/FindUniqueCourseOnTermAutomationArgs";
import { GroupByCourseOnTermAutomationArgs } from "./args/GroupByCourseOnTermAutomationArgs";
import { UpdateCourseOnTermAutomationArgs } from "./args/UpdateCourseOnTermAutomationArgs";
import { UpdateManyCourseOnTermAutomationArgs } from "./args/UpdateManyCourseOnTermAutomationArgs";
import { UpsertCourseOnTermAutomationArgs } from "./args/UpsertCourseOnTermAutomationArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCourseOnTermAutomation } from "../../outputs/AggregateCourseOnTermAutomation";
import { CourseOnTermAutomationGroupBy } from "../../outputs/CourseOnTermAutomationGroupBy";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class CourseOnTermAutomationCrudResolver {
  @TypeGraphQL.Query(_returns => CourseOnTermAutomation, {
    nullable: true
  })
  async courseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CourseOnTermAutomation, {
    nullable: true
  })
  async findFirstCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CourseOnTermAutomation], {
    nullable: false
  })
  async courseOnTermAutomations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnTermAutomation, {
    nullable: false
  })
  async createCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCourseOnTermAutomationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnTermAutomation, {
    nullable: true
  })
  async deleteCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnTermAutomation, {
    nullable: true
  })
  async updateCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCourseOnTermAutomationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCourseOnTermAutomationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CourseOnTermAutomation, {
    nullable: false
  })
  async upsertCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCourseOnTermAutomation, {
    nullable: false
  })
  async aggregateCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCourseOnTermAutomationArgs): Promise<AggregateCourseOnTermAutomation> {
    return getPrismaFromContext(ctx).courseOnTermAutomation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CourseOnTermAutomationGroupBy], {
    nullable: false
  })
  async groupByCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCourseOnTermAutomationArgs): Promise<CourseOnTermAutomationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
