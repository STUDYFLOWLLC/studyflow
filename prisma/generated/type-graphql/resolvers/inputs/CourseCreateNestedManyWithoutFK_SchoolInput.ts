import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateManyFK_SchoolInputEnvelope } from "../inputs/CourseCreateManyFK_SchoolInputEnvelope";
import { CourseCreateOrConnectWithoutFK_SchoolInput } from "../inputs/CourseCreateOrConnectWithoutFK_SchoolInput";
import { CourseCreateWithoutFK_SchoolInput } from "../inputs/CourseCreateWithoutFK_SchoolInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseCreateNestedManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: CourseCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: CourseCreateManyFK_SchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseWhereUniqueInput[] | undefined;
}
