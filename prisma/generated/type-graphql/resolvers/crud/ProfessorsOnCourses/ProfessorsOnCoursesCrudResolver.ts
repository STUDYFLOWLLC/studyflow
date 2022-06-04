import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfessorsOnCoursesArgs } from "./args/AggregateProfessorsOnCoursesArgs";
import { CreateManyProfessorsOnCoursesArgs } from "./args/CreateManyProfessorsOnCoursesArgs";
import { CreateProfessorsOnCoursesArgs } from "./args/CreateProfessorsOnCoursesArgs";
import { DeleteManyProfessorsOnCoursesArgs } from "./args/DeleteManyProfessorsOnCoursesArgs";
import { DeleteProfessorsOnCoursesArgs } from "./args/DeleteProfessorsOnCoursesArgs";
import { FindFirstProfessorsOnCoursesArgs } from "./args/FindFirstProfessorsOnCoursesArgs";
import { FindManyProfessorsOnCoursesArgs } from "./args/FindManyProfessorsOnCoursesArgs";
import { FindUniqueProfessorsOnCoursesArgs } from "./args/FindUniqueProfessorsOnCoursesArgs";
import { GroupByProfessorsOnCoursesArgs } from "./args/GroupByProfessorsOnCoursesArgs";
import { UpdateManyProfessorsOnCoursesArgs } from "./args/UpdateManyProfessorsOnCoursesArgs";
import { UpdateProfessorsOnCoursesArgs } from "./args/UpdateProfessorsOnCoursesArgs";
import { UpsertProfessorsOnCoursesArgs } from "./args/UpsertProfessorsOnCoursesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ProfessorsOnCourses } from "../../../models/ProfessorsOnCourses";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProfessorsOnCourses } from "../../outputs/AggregateProfessorsOnCourses";
import { ProfessorsOnCoursesGroupBy } from "../../outputs/ProfessorsOnCoursesGroupBy";

@TypeGraphQL.Resolver(_of => ProfessorsOnCourses)
export class ProfessorsOnCoursesCrudResolver {
  @TypeGraphQL.Query(_returns => ProfessorsOnCourses, {
    nullable: true
  })
  async findUniqueProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProfessorsOnCourses, {
    nullable: true
  })
  async findFirstProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProfessorsOnCourses], {
    nullable: false
  })
  async findManyProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProfessorsOnCourses, {
    nullable: false
  })
  async createProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProfessorsOnCoursesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProfessorsOnCourses, {
    nullable: true
  })
  async deleteProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProfessorsOnCourses, {
    nullable: true
  })
  async updateProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProfessorsOnCoursesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProfessorsOnCoursesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProfessorsOnCourses, {
    nullable: false
  })
  async upsertProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProfessorsOnCourses, {
    nullable: false
  })
  async aggregateProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfessorsOnCoursesArgs): Promise<AggregateProfessorsOnCourses> {
    return getPrismaFromContext(ctx).professorsOnCourses.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProfessorsOnCoursesGroupBy], {
    nullable: false
  })
  async groupByProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProfessorsOnCoursesArgs): Promise<ProfessorsOnCoursesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
