import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserUpdateWithoutFK_CourseInput } from "../inputs/CourseOnUserUpdateWithoutFK_CourseInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnUserUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  data!: CourseOnUserUpdateWithoutFK_CourseInput;
}
