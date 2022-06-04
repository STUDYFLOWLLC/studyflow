import * as TypeGraphQL from "type-graphql";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { Term } from "../../../models/Term";
import { User } from "../../../models/User";
import { TermFK_CourseOnTermArgs } from "./args/TermFK_CourseOnTermArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Term)
export class TermRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() term: Term, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).term.findUnique({
      where: {
        TermID: term.TermID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => [CourseOnTerm], {
    nullable: false
  })
  async FK_CourseOnTerm(@TypeGraphQL.Root() term: Term, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TermFK_CourseOnTermArgs): Promise<CourseOnTerm[]> {
    return getPrismaFromContext(ctx).term.findUnique({
      where: {
        TermID: term.TermID,
      },
    }).FK_CourseOnTerm(args);
  }
}
