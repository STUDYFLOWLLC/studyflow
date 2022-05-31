import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateManyFK_CourseInputEnvelope } from "../inputs/CourseOnUserCreateManyFK_CourseInputEnvelope";
import { CourseOnUserCreateOrConnectWithoutFK_CourseInput } from "../inputs/CourseOnUserCreateOrConnectWithoutFK_CourseInput";
import { CourseOnUserCreateWithoutFK_CourseInput } from "../inputs/CourseOnUserCreateWithoutFK_CourseInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserCreateNestedManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserCreateNestedManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: CourseOnUserCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnUserCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnUserCreateManyFK_CourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnUserWhereUniqueInput[] | undefined;
}
