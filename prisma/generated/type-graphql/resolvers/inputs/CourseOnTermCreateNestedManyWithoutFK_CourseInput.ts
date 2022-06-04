import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateManyFK_CourseInputEnvelope } from "../inputs/CourseOnTermCreateManyFK_CourseInputEnvelope";
import { CourseOnTermCreateOrConnectWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_CourseInput";
import { CourseOnTermCreateWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateWithoutFK_CourseInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateNestedManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermCreateNestedManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermCreateManyFK_CourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput[] | undefined;
}
