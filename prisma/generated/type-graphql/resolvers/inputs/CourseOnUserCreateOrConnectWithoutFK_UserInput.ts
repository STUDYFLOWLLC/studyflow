import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateWithoutFK_UserInput } from "../inputs/CourseOnUserCreateWithoutFK_UserInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnUserCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: CourseOnUserCreateWithoutFK_UserInput;
}
