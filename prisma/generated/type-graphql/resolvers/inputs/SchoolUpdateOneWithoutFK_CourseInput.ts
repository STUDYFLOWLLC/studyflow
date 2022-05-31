import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutFK_CourseInput } from "../inputs/SchoolCreateOrConnectWithoutFK_CourseInput";
import { SchoolCreateWithoutFK_CourseInput } from "../inputs/SchoolCreateWithoutFK_CourseInput";
import { SchoolUpdateWithoutFK_CourseInput } from "../inputs/SchoolUpdateWithoutFK_CourseInput";
import { SchoolUpsertWithoutFK_CourseInput } from "../inputs/SchoolUpsertWithoutFK_CourseInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolUpdateOneWithoutFK_CourseInput", {
  isAbstract: true
})
export class SchoolUpdateOneWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_CourseInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutFK_CourseInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpsertWithoutFK_CourseInput, {
    nullable: true
  })
  upsert?: SchoolUpsertWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateWithoutFK_CourseInput, {
    nullable: true
  })
  update?: SchoolUpdateWithoutFK_CourseInput | undefined;
}
