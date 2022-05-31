import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserUpdateWithoutFK_UserInput } from "../inputs/CourseOnUserUpdateWithoutFK_UserInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnUserUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: CourseOnUserUpdateWithoutFK_UserInput;
}
