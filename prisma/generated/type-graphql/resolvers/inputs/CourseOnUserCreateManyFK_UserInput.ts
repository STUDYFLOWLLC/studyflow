import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CourseOnUserCreateManyFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserCreateManyFK_UserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseOnUserID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID?: number | undefined;
}
