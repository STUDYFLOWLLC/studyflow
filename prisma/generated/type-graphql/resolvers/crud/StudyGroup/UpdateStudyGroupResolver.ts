import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateStudyGroupArgs } from "./args/UpdateStudyGroupArgs";
import { StudyGroup } from "../../../models/StudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudyGroup)
export class UpdateStudyGroupResolver {
  @TypeGraphQL.Mutation(_returns => StudyGroup, {
    nullable: true
  })
  async updateStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateStudyGroupArgs): Promise<StudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studyGroup.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
