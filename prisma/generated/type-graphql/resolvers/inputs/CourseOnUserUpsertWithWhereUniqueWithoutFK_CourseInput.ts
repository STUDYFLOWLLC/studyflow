import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateWithoutFK_CourseInput } from "../inputs/CourseOnUserCreateWithoutFK_CourseInput";
import { CourseOnUserUpdateWithoutFK_CourseInput } from "../inputs/CourseOnUserUpdateWithoutFK_CourseInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnUserUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  update!: CourseOnUserUpdateWithoutFK_CourseInput;

  @TypeGraphQL.Field(_type => CourseOnUserCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: CourseOnUserCreateWithoutFK_CourseInput;
}
